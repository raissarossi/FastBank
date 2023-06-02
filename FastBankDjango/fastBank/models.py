from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from .sorteador import numeros, saldo, cartao
from django.db.models.signals import post_save
from django.dispatch import receiver


class CustomUserManager(BaseUserManager):
    def create_user(self, CPF_CNPJ, password, **extra_fields):
        """
        Cria e salva um usuário com o CPF e senha fornecidos.
        """
        if not CPF_CNPJ:
            raise ValueError('O CPF é obrigatório')
        

        # CPF_CNPJ = extra_fields.get('CPF_CNPJ')  
        type_person = extra_fields.get('type_person')
        print(type(CPF_CNPJ))
        # print("tamanho: "+len(CPF_CNPJ))
        if (type_person=="F"):
            if len(CPF_CNPJ) == 11:
                CPF_CNPJ = CPF_CNPJ[:3] + '.' + CPF_CNPJ[3:6] + '.' + CPF_CNPJ[6:9] + '-' + CPF_CNPJ[9:11]
                


        if (type_person=="J"):
            if len(CPF_CNPJ) == 14:
                CPF_CNPJ = CPF_CNPJ[:2] + '.' + CPF_CNPJ[2:5] + '.' + CPF_CNPJ[5:8] + '/' + CPF_CNPJ[8:12] + '-' + CPF_CNPJ[12:14]
        # CPF_CNPJ.save()
        print(CPF_CNPJ)


        user = self.model(CPF_CNPJ=CPF_CNPJ, **extra_fields)
        user.set_password(password)
        user.save()
        # if tipoPessoa == 'F':
        #     ClientePF.objects.create(cliente=)
        Conta.objects.create(cliente=user, agencia=numeros(3), numero=numeros(7), digito=numeros(1), saldo=saldo(), limite=1000, chavePix=extra_fields.get('email'))
        return user

    def create_superuser(self, CPF_CNPJ, password, **extra_fields):
        """
        Cria e salva um superusuário com o CPF_CNPJ e senha fornecidos.
        """
        # extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(CPF_CNPJ, password, **extra_fields)

class Cliente(AbstractUser):  
    failed_login_attempts_count = models.IntegerField(default=0)

    FISICO = 'F'
    JURIDICO='J'
    TYPES=[
        (FISICO,'Pessoa Física'),
        (JURIDICO,'Pessoa Jurídica'),
    ]
    USERNAME_FIELD = 'CPF_CNPJ'
    REQUIRED_FIELDS = ['nome', 'data_nascimento', 'telefone', 'email', 'observacao', 'logradouro', 'bairro', 'cidade', 'uf', 'cep', 'complemento', 'type_person', 'password',]

    is_active = models.BooleanField(default=True)
    # blocked_at = models.DateTimeField(default=False)
    is_staff = models.BooleanField(default=False)
    objects = CustomUserManager()
    username = None

    nome = models.CharField(max_length=100)
    CPF_CNPJ = models.CharField(max_length=25, unique=True)
    data_nascimento = models.DateField()
    created_at =  models.DateTimeField(auto_now_add=True)
    updated_at =  models.DateTimeField(auto_now=True)
    telefone = models.CharField(max_length=15)#, unique=True)
    email = models.CharField(max_length=100, unique=True)#, unique=True)
    observacao = models.CharField(max_length=100, blank=True, null=True)
    logradouro = models.CharField(max_length=100)
    bairro = models.CharField(max_length=50)
    cidade = models.CharField(max_length=50)
    uf = models.CharField(max_length=2)
    cep = models.CharField(max_length=10)
    complemento = models.CharField(max_length=100)
    type_person = models.CharField(max_length=1, choices=TYPES)
   
    def __str__(self) -> str:
        return self.nome

class ClientePF(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    rg = models.CharField(max_length=12)

    def __str__(self) -> str:
        return self.cliente
    
class ClientePJ(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    inscricaoEstadual = models.CharField(max_length=30)
    inscricaoMunicipal = models.CharField(max_length=30)

    def __str__(self) -> str:
        return self.cliente.nome

class Conta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    agencia = models.IntegerField()
    numero = models.IntegerField()
    digito = models.IntegerField()
    saldo = models.DecimalField(max_digits=20, decimal_places=2)
    limite = models.DecimalField(max_digits=20, decimal_places=2)
    chavePix = models.CharField(max_length=100, unique=True)

    def __str__(self) -> str:
        return self.cliente.nome

class Cartoes(models.Model):
    DEBITO = 'd'
    CREDITO = 'c'
    CREBITO = 'b'
    CARTOESLISTA = (
        (DEBITO, "Debito"),
        (CREDITO, "Credito"),
        (CREBITO, "Crebito")
    )
    conta = models.ForeignKey(Conta, on_delete=models.CASCADE)
    tipo = models.CharField(max_length=1, choices=CARTOESLISTA, default=CREBITO)
    numero= models.CharField(max_length=20, default="", unique=True)
    bandeira = models.CharField(max_length=1, default='R')
    


class Movimentacao(models.Model):
    PIX = 'p'
    TRANSFERENCIA = 't'
    DEPOSITO = 'd'
    TIPOS = (
        (PIX, "PIX"),
        (TRANSFERENCIA, "Transferência"),
        (DEPOSITO, "Depósito")
    )
    conta = models.ForeignKey(Conta, on_delete=models.CASCADE, related_name="conta")
    chavePix = models.CharField(max_length=100)
    tipo = models.CharField(max_length=1, choices=TIPOS) # PIX TRANFERENCIA PAGAMENTO
    valor = models.DecimalField(max_digits=10, decimal_places=2, default="p")
    destinatario = models.CharField(max_length=100)
    data = models.DateTimeField(auto_now_add=True)
    descricao = models.CharField(max_length=100)


class Emprestimo(models.Model):
    conta = models.ForeignKey(Conta, on_delete=models.CASCADE)
    valor =  models.DecimalField(max_digits=10, decimal_places=2)
    juros = models.DecimalField(max_digits=10, decimal_places=2, default=0.05)
    data = models.DateTimeField(auto_now_add=True)
    valorPagar = models.DecimalField(max_digits=10, decimal_places=2)
    aprovado = models.BooleanField(default=False)


class Investimento(models.Model):
    conta = models.ForeignKey(Conta, on_delete=models.CASCADE)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    prazo = models.DateTimeField(auto_now_add=True)    
    saldoInvestido = models.DecimalField(max_digits=10, decimal_places=2)
    local = models.CharField(max_length=50)
    finalizado = models.BooleanField(default=False)


class Parcelas(models.Model):
    emprestimo = models.ForeignKey(Emprestimo, on_delete=models.PROTECT)
    vezes = models.IntegerField(default=1)
    valorParcela = models.DecimalField(max_digits=10, decimal_places=2)
    dataPagamento = models.DateField()
    valorPago = models.DecimalField(max_digits=10, decimal_places=2)