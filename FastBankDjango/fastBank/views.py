from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.permissions import IsAuthenticated


class ClienteListarDetalhar(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

    def list(self, request, *args, **kwargs):
        #LISTAR TODOS OS CLIENTES


        # QUEM FOI O AUTOR DO REQUEST???
        

        token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
        print(token)
        dados = AccessToken(token)
        contaId = dados['user_id']
        print(contaId)
        conta = Conta.objects.get(cliente=int(contaId))
        print(conta.cliente.nome)
        print(conta.saldo)
        #QUEM FEZ A REQUISIÇÃO FOI O ID 1


        return super().list(request, *args, **kwargs)
    # def get_queryset(self):
    #     queryset = Cliente.objects.all()
    #     resultado = queryset.filter(user=1)

    #     return super().get_queryset()

    # def create(self, request, *args, **kwargs):
        # conta = Conta.objects.filter(cliente=1)
        # for i in conta:
        #     if i.numero == request.data['numero']:
        #         if i.saldo > request.data['valor_transferencia']:
        #             mov = Movimentacao()
        #             mov.conta = i.id
        #             mov.valor = request.data['valor_transferencia']
        #             mov.save()

                    
        #             gustavo = Conta.objects.get(numero=request.data['numero'])
        #             gustavo.saldo += decimal(request.data['valor_transferencia'])
        #             gustavo.save()

        #             if gustavo is not None:
        #                 mov2 = Movimentacao()
        #                 mov2.conta = gustavo.id
        #                 mov2.save()
        # return super().create(request, *args, **kwargs)

class ContaListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = Conta.objects.all()
    serializer_class = ContaSerializer
    
"""
class ContaVerify(viewsets.ListaView):
    # permission_classes = (IsAuthenticated,)
    queryset = Conta.objects.all()
    serializer_class = ContaSerializer
    def list(request, *args, **kwargs):
        
        return Conta.objects.filter(id=request.data['id'])
"""

class MovimentacaoListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = Movimentacao.objects.all()
    serializer_class = MovimentacaoSerializer

class InvestimentoListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = Investimento.objects.all()
    serializer_class = InvestimentoSerializer

class EmprestimoListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = Emprestimo.objects.all()
    serializer_class = EmprestimoSerializer

class ParcelasListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = Parcelas.objects.all()
    serializer_class = ParcelasSerializer
