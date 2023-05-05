from django.shortcuts import render
from rest_framework.response import responses
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .models import *
from .serializer import *

class ClienteList(ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
class ClienteDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer



# class ClientePFList(ListCreateAPIView):
#     queryset = ClientePF.objects.all()
#     serializer_class = ClientePFSerializer
# class ClientePFDetail(RetrieveUpdateDestroyAPIView):
#     queryset = ClientePF.objects.all()
#     serializer_class = ClientePFSerializer



# class ClientePJList(ListCreateAPIView):
#     queryset = ClientePJ.objects.all()
#     serializer_class = ClientePJSerializer
# class ClientePJDetail(RetrieveUpdateDestroyAPIView):
#     queryset = ClientePJ.objects.all()
#     serializer_class = ClientePJSerializer

    

# class EnderecoList(ListCreateAPIView):
#     queryset = Endereco.objects.all()
#     serializer_class = EnderecoSerializer
# class EnderecoDetail(RetrieveUpdateDestroyAPIView):
#     queryset = Endereco.objects.all()
#     serializer_class = EnderecoSerializer



# class ContatoList(ListCreateAPIView):
#     queryset = Contato.objects.all()
#     serializer_class = ContatoSerializer
# class ContatoDetail(RetrieveUpdateDestroyAPIView):
#     queryset = Contato.objects.all()
#     serializer_class = ContatoSerializer



class ContaList(ListCreateAPIView):
    queryset = Conta.objects.all()
    serializer_class = ContaSerializer
class ContaDetail(RetrieveUpdateDestroyAPIView):
    queryset = Conta.objects.all()
    serializer_class = ContaSerializer



class MovimentacaoList(ListCreateAPIView):
    queryset = Movimentacao.objects.all()
    serializer_class = MovimentacaoSerializer
class MovimentacaoDetail(RetrieveUpdateDestroyAPIView):
    queryset = Movimentacao.objects.all()
    serializer_class = MovimentacaoSerializer



class InvestimentoList(ListCreateAPIView):
    queryset = Investimento.objects.all()
    serializer_class = MovimentacaoSerializer
class InvestimentoDetail(RetrieveUpdateDestroyAPIView):
    queryset = Investimento.objects.all()
    serializer_class = InvestimentoSerializer



class EmprestimoList(ListCreateAPIView):
    queryset = Emprestimo.objects.all()
    serializer_class = EmprestimoSerializer
class EmprestimoDetail(RetrieveUpdateDestroyAPIView):
    queryset = Emprestimo.objects.all()
    serializer_class = EmprestimoSerializer



class ParcelasList(ListCreateAPIView):
    queryset = Parcelas.objects.all()
    serializer_class = ParcelasSerializer
class ParcelasDetail(RetrieveUpdateDestroyAPIView):
    queryset = Parcelas.objects.all()
    serializer_class = ParcelasSerializer
