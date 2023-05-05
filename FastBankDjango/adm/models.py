from django.db import models

class Endereco(models.Model):
    logradouro = models.CharField(max_length=100)
    numero = models.IntegerField()
    bairro = models.CharField(max_length=50)
    cidade = models.CharField(max_length=50)
    uf = models.CharField(max_length=2)
    cep = models.CharField(max_length=10)
    complemento = models.CharField(max_length=100)
    def __str__(self) -> str:
        return self.cep
    
class Contato(models.Model):
    telefone = models.CharField(max_length=15, unique=True)
    email = models.CharField(max_length=100, unique=True)
    observacao = models.CharField(max_length=100)
    def __str__(self) -> str:
        return self.email


class Cliente(models.Model):
    FISICO = 'F'
    JURIDICO='J'
    TYPES=[
        (FISICO,'Pessoa Física'),
        (JURIDICO,'Pessoa Jurídica'),
    ]
    
    # contato = models.ForeignKey(Contato, on_delete=models.CASCADE)
    # endereco = models.ForeignKey(Endereco, on_delete=models.CASCADE)
    nome = models.CharField(max_length=100)
    nomeSocial = models.CharField(max_length=100)
    data_nascimento = models.DateField()

    created_at =  models.DateTimeField(auto_now_add=True)
    updated_at =  models.DateTimeField(auto_now=True)

    telefone = models.CharField(max_length=15)#, unique=True)
    email = models.CharField(max_length=100)#, unique=True)
    observacao = models.CharField(max_length=100)

    logradouro = models.CharField(max_length=100)
    bairro = models.CharField(max_length=50)
    cidade = models.CharField(max_length=50)
    uf = models.CharField(max_length=2)
    cep = models.CharField(max_length=10)
    complemento = models.CharField(max_length=100)

    type_person = models.CharField(max_length=1, choices=TYPES)
    cpf = models.CharField(max_length=11, null=True)#, unique=True)
    rg = models.CharField(max_length=10, null=True)#, unique=True)
    cnpj = models.CharField(max_length=25, null=True)#, unique=True)
    inscricaoEstadual = models.CharField(max_length=30, null=True)#, unique=True)
    inscricaoMunicipal = models.CharField(max_length=30, null=True)#, unique=True)
    def __str__(self) -> str:
        return self.nome

# class ClientePF(models.Model):
#     cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
#     cpf = models.CharField(max_length=11)
#     rg = models.CharField(max_length=10)

# class ClientePJ(models.Model):
#     cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
#     cnpj = models.CharField(max_length=25)
#     inscricaoEstadual = models.CharField(max_length=30)
#     inscricaoMunicipal = models.CharField(max_length=30)


class Conta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    agencia = models.IntegerField()
    numero = models.IntegerField()
    digito = models.IntegerField()
    saldo = models.DecimalField(max_digits=10, decimal_places=2)
    limite = models.DecimalField(max_digits=10, decimal_places=2)
    updated_at = models.DateTimeField(auto_now=True)
    ativa = models.BooleanField(default=False)

class Movimentacao(models.Model):
    conta = models.ForeignKey(Conta, on_delete=models.CASCADE)
    tipo = models.CharField(max_length=1)
    # PIX TRANFERENCIA PAGAMENTO
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