from rest_framework import serializers
from .models import *


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('id','nome','nomeSocial','data_nascimento','telefone','email','observacao','logradouro','bairro','cidade','uf','cep','complemento','type_person')
