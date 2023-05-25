from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from .sorteador import numeros, saldo

class CustomUserManager(BaseUserManager):

    def create_user(self, CPF_CNPJ, password=None, **extra_fields):
        """
        Cria e salva um usuário com o CPF e senha fornecidos.
        """
        if not CPF_CNPJ:
            raise ValueError('O CPF é obrigatório')
        user = self.model(CPF_CNPJ=CPF_CNPJ, **extra_fields)
        user.set_password(password)
        user.save()
        tipoPessoa = extra_fields.get('type_person')
        # if tipoPessoa == 'F':
        #     ClientePF.objects.create(cliente=)
        Conta.objects.create(cliente=user, agencia=numeros(3), numero=numeros(7), digito=numeros(1), saldo=saldo(), limite=1000)
        return user

    def create_superuser(self, CPF_CNPJ, password=None, **extra_fields):
        """
        Cria e salva um superusuário com o CPF_CNPJ e senha fornecidos.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(CPF_CNPJ, password, **extra_fields)

class Cliente(AbstractUser):   
    FISICO = 'F'
    JURIDICO='J'
    TYPES=[
        (FISICO,'Pessoa Física'),
        (JURIDICO,'Pessoa Jurídica'),
    ]
    USERNAME_FIELD = 'CPF_CNPJ'
    REQUIRED_FIELDS = ['nome', 'data_nascimento', 'telefone', 'email', 'observacao', 'logradouro', 'bairro', 'cidade', 'uf', 'cep', 'complemento', 'type_person', 'password']

    is_active = models.BooleanField(default=True)
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
    observacao = models.CharField(max_length=100)
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
        return self.cliente

class Conta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    agencia = models.IntegerField()
    numero = models.IntegerField()
    digito = models.IntegerField()
    saldo = models.DecimalField(max_digits=20, decimal_places=2)
    limite = models.DecimalField(max_digits=20, decimal_places=2)
    # updated_at = models.DateTimeField(auto_now=True)
    # ativa = models.BooleanField(default=False)


class Movimentacao(models.Model):
    conta = models.ForeignKey(Conta, on_delete=models.CASCADE, related_name="conta")
    contaDestinatario = models.ForeignKey(Conta, on_delete=models.CASCADE, related_name="contaDestinatario")
    tipo = models.CharField(max_length=1) # PIX TRANFERENCIA PAGAMENTO
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    destinatario = models.CharField(max_length=100)
    data = models.DateTimeField(auto_now_add=True)


class Investimento(models.Model):
    conta = models.ForeignKey(Conta, on_delete=models.CASCADE)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    prazo = models.DateTimeField(auto_now_add=True)    
    saldoInvestido = models.DecimalField(max_digits=10, decimal_places=2)
    local = models.CharField(max_length=50)
    finalizado = models.BooleanField(default=False)

class Emprestimo(models.Model):
    conta = models.ForeignKey(Conta, on_delete=models.PROTECT)
    valor =  models.DecimalField(max_digits=10, decimal_places=2)
    juros = models.DecimalField(max_digits=10, decimal_places=2)
    data = models.DateTimeField(auto_now_add=True)
    aprovado = models.BooleanField(default=False)
    observacao = models.CharField(max_length=100, blank=True)


class Parcelas(models.Model):
    emprestimo = models.ForeignKey(Emprestimo, on_delete=models.PROTECT)
    vezes = models.IntegerField(default=1)
    valorParcela = models.DecimalField(max_digits=10, decimal_places=2)
    dataPagamento = models.DateField()
    valorPago = models.DecimalField(max_digits=10, decimal_places=2)