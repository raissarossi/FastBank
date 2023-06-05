from rest_framework import serializers
from .models import *


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('id', 'nome', 'CPF_CNPJ', 'data_nascimento', 'telefone', 'email', 'observacao', 'logradouro', 'bairro', 'cidade', 'uf', 'cep', 'complemento', 'type_person', 'blocked_at', 'is_active',
        )

class ContaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conta
        fields = ('id','cliente','agencia', 'numero','digito','saldo','limite', 'chavePix',)

class ClientePFSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientePF
        fields = ('id','cliente','rg',)

class CartoesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cartoes
        fields =('id', 'conta', 'tipo', 'numero', 'bandeira',)

class ClientePJSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientePJ
        fields = ('id','cliente', 'inscricaoEstadual','inscricaoMunicipal',)

class MovimentacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movimentacao
        fields = ('id','remetente','remetenteNome','destinatario','destinatarioNome','chavePix','tipo','valor','data','descricao',)
# class MovimentacaoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Movimentacao
#         fields = ('id','conta','chavePix','tipo','valor','destinatario','data', 'descricao',)

class InvestimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investimento
        fields = ('id','conta', 'valor', 'prazo', 'saldoInvestido', 'local', 'finalizado',)

class EmprestimoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emprestimo
        fields = ('id', 'conta', 'valor', 'juros', 'data', 'valorPagar', 'aprovado',)

class ParcelasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parcelas
        fields = ('id','emprestimo','vezes','valorParcela','dataPagamento','valorPago',)