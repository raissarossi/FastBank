from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.permissions import IsAuthenticated
import decimal

# PROXIMOS PASSOS

# CRIAR CARTAO -- MOSTRAR
# EMPRESTIMOS --  FORMULA








class ClienteListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

    def list(self, request, *args, **kwargs):
        #LISTAR TODOS OS CLIENTES


        # QUEM FOI O AUTOR DO REQUEST???
        

        # token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
        # print(token)
        # dados = AccessToken(token)
        # contaId = dados['user_id']
        # print(contaId)
        # conta = Conta.objects.get(cliente=int(contaId))
        # print(conta.cliente.nome)
        # print(conta.saldo)
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

class ClientePFListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = ClientePF.objects.all()
    serializer_class = ClientePFSerializer

class ClientePJListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = ClientePJ.objects.all()
    serializer_class = ClientePJSerializer

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
    permission_classes = (IsAuthenticated,)
    queryset = Movimentacao.objects.all()
    serializer_class = MovimentacaoSerializer

    def create(self, request, *args, **kwargs):

        #=============================================NESSE ESPAÇO AKI=============================================#
        #=============================================NESSE ESPAÇO AKI=============================================#
        #=============================================NESSE ESPAÇO AKI=============================================#

        token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
        print(token)
        remetente = AccessToken(token)
        contaRemetenteId = remetente['user_id']

        conta_remetente = Conta.objects.get(cliente=int(contaRemetenteId))

        #=============================================NESSE ESPAÇO AKI=============================================#
        #=============================================NESSE ESPAÇO AKI=============================================#
        #=============================================NESSE ESPAÇO AKI=============================================#
        print(request.data)
        # #pegar o token e obter o user_id
        # print("dest :",destinatario)
        conta_destinatario = Conta.objects.get(chavePix=request.data['chavePix'])
        destinatario = conta_destinatario.cliente

        if conta_destinatario is None:
            raise serializers.ValidationError('destinatario nao exist')
        if conta_remetente is None:
            raise serializers.ValidationError('remetente nao exist')
        if conta_remetente.saldo <= decimal.Decimal(request.data['valor']):
            raise serializers.ValidationError('Saldo is not suficiente')
        
        conta_remetente.saldo -= decimal.Decimal(request.data['valor'])
        conta_remetente.save()
        
        conta_destinatario.saldo += decimal.Decimal(request.data['valor'])
        conta_destinatario.save()

        _mutable = request.data._mutable

        # set to mutable
        request.data._mutable = True
        request.data['conta'] = contaRemetenteId
        request.data['destinatario'] = destinatario.nome
        request.data._mutable = _mutable
        # print("EESSEE :"+request.data['contaDestinatario']+" : "+contaRemetenteId)

        if contaRemetenteId == conta_destinatario.id:
            raise serializers.ValidationError('conta e destinatario sao os mesmos')

        return super().create(request, *args, **kwargs)

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
