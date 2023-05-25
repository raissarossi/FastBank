from rest_framework import serializers
from .models import *


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('id', 'nome', 'CPF_CNPJ', 'data_nascimento', 'telefone', 'email', 'observacao', 'logradouro', 'bairro', 'cidade', 'uf', 'cep', 'complemento', 'type_person',
        )

class ContaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conta
        fields = ('id','cliente','agencia','numero','digito','saldo','limite')

class ClientePFSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientePF
        fields = ('id','cliente','rg')

class ClientePJSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientePJ
        fields = ('id','cliente', 'inscricaoEstadual','inscricaoMunicipal')

class MovimentacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movimentacao
        fields = ('id','conta','tipo', 'valor','destinatario','data')

class InvestimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investimento
        fields = ('id','conta', 'valor', 'prazo', 'saldoInvestido', 'local', 'finalizado')

class EmprestimoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emprestimo
        fields = ('id','conta','valor','juros','data','aprovado','observacao')

class ParcelasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parcelas
        fields = ('id','emprestimo','vezes','valorParcela','dataPagamento','valorPago')