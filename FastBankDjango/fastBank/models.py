from django.db import models
from django.contrib.auth.models import AbstractUser

class Cliente(AbstractUser):
    FISICO = 'F'
    JURIDICO='J'
    TYPES=[
        (FISICO,'Pessoa Física'),
        (JURIDICO,'Pessoa Jurídica'),
    ]
    USERNAME_FIELD = 'CPF_CNPJ'
    REQUIRED_FIELDS = ['nome', 'username', 'email', 'data_nascimento', 'telefone','cep','complemento', 'type_person', 'password']


    nome = models.CharField(max_length=100)
    CPF_CNPJ = models.CharField(max_length=25, unique=True)
    username = models.CharField(max_length=100, unique=True)
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
    rg = models.CharField(max_length=10)

class ClientePJ(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    inscricaoEstadual = models.CharField(max_length=30)
    inscricaoMunicipal = models.CharField(max_length=30)