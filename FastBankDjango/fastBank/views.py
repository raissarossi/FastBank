from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.permissions import IsAuthenticated
import decimal
from rest_framework.response import Response
from .sorteador import cartao
from django.http import HttpResponseBadRequest
# PROXIMOS PASSOS

# CRIAR CARTAO -- MOSTRAR
# EMPRESTIMOS --  FORMULA




def get_id(request):
    token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
    print(token)
    remetente = AccessToken(token)
    contaRemetenteId = remetente['user_id']
    return contaRemetenteId



class ClienteListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

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

class CartoesListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = Cartoes.objects.all()
    serializer_class = CartoesSerializer
    
    def create(self, request, *args, **kwargs):
        id = get_id(request)
        conta = Conta.objects.get(cliente=id)
        print(conta)
        tipo = request.data['tipo']        

        if tipo == 'd' and Cartoes.objects.filter(conta=conta, tipo='d').exists():
            return HttpResponseBadRequest("Já existe um cartão do tipo 'debito' associado a esta conta.")
        
        if tipo == 'c' and Cartoes.objects.filter(conta=conta, tipo='c').count() >= 5:
            return HttpResponseBadRequest("Limite máximo de cartões do tipo 'credito' atingido para esta conta.")
        
        if tipo == 'b' and Cartoes.objects.filter(conta=conta, tipo='b').exists():
            return HttpResponseBadRequest("Limite máximo de cartões do tipo 'crebito' atingido para esta conta.")
        
        numero = cartao()
        resposta = Cartoes.objects.create(conta=conta, tipo=tipo, numero=numero)
        
        return Response(CartoesSerializer(resposta).data,200)


class MovimentacaoListarDetalhar(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Movimentacao.objects.all()
    serializer_class = MovimentacaoSerializer

    def create(self, request, *args, **kwargs):
        contaRemetenteId = get_id(request)
        conta_remetente = Conta.objects.get(cliente=int(contaRemetenteId))

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
    
    def list(self, request, *args, **kwargs):
        id_user = get_id(request)
        movimentacoes = Movimentacao.objects.filter(conta=id_user)
        return Response(MovimentacaoSerializer(movimentacoes, many=True).data)
    

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
