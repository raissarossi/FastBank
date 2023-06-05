from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.permissions import IsAuthenticated
import decimal
from rest_framework.response import Response
from .sorteador import cartao
from django.http import HttpResponseBadRequest
from django.db.models import Q
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
    
    def create(self, request, *args, **kwargs):
        CPF_CNPJ = request.data['CPF_CNPJ']  
        type_person = request.data['type_person']

        # print("tamanho: "+len(CPF_CNPJ))
        if (type_person=="F"):
            if len(CPF_CNPJ) == 11:
                CPF_CNPJ = CPF_CNPJ[:3] + '.' + CPF_CNPJ[3:6] + '.' + CPF_CNPJ[6:9] + '-' + CPF_CNPJ[9:11]
                


        if (type_person=="J"):
            if len(CPF_CNPJ) == 14:
                CPF_CNPJ = CPF_CNPJ[:2] + '.' + CPF_CNPJ[2:5] + '.' + CPF_CNPJ[5:8] + '/' + CPF_CNPJ[8:12] + '-' + CPF_CNPJ[12:14]
        # CPF_CNPJ.save()
        print(CPF_CNPJ)


        _mutable = request.POST._mutable
        # set to mutable
        request.POST._mutable = True
        request.data['CPF_CNPJ'] = CPF_CNPJ
        request.POST._mutable = False
        request.POST._mutable = _mutable
        return super().create(request, *args, **kwargs)

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

class ContaVerificarPix(ListAPIView):

    serializer_class = ContaSerializer

    def get_queryset(self):
        parametro = self.kwargs['chavePix']
        queryset = Conta.objects.filter(chavePix=parametro)
        return queryset
    
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
        
        if contaRemetenteId == conta_destinatario.id:
            raise serializers.ValidationError('conta e destinatario sao os mesmos')
        
        conta_remetente.saldo -= decimal.Decimal(request.data['valor'])
        conta_remetente.save()
        
        conta_destinatario.saldo += decimal.Decimal(request.data['valor'])
        conta_destinatario.save()

        _mutable = request.POST._mutable

        # set to mutable
        request.POST._mutable = True
        request.data['remetente'] = contaRemetenteId
        request.data['remetenteNome'] = conta_remetente.cliente.nome
        request.data['destinatario'] = conta_destinatario.id
        request.data['destinatarioNome'] = destinatario.nome
        request.POST._mutable = False
        request.POST._mutable = _mutable
        # print("EESSEE :"+request.data['contaDestinatario']+" : "+contaRemetenteId)

        

        return super().create(request, *args, **kwargs)
    
    def list(self, request, *args, **kwargs):
        id_user = get_id(request)
        Conta.objects.get(id=id_user)
        movimentacoes = Movimentacao.objects.filter(Q(remetente=id_user) | Q(destinatario=id_user)).order_by("-data")
        
        return Response(MovimentacaoSerializer(movimentacoes, many=True).data)
    

class InvestimentoListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = Investimento.objects.all()
    serializer_class = InvestimentoSerializer
    def list(self, request, *args, **kwargs):
        print('BACKENCERTO AEAEAEAEAEAE')
        return super().list(request, *args, **kwargs)

class EmprestimoListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = Emprestimo.objects.all()
    serializer_class = EmprestimoSerializer

    def create(self, request, *args, **kwargs):
        contaRemetenteId = get_id(request)
        conta_remetente = Conta.objects.get(cliente=int(contaRemetenteId))
        valorEmprestimo = float(request.data['valor'])
        juros = 0.05
        if (valorEmprestimo > 1500):
            juros = 0.1
        if (valorEmprestimo > 10000):
            juros = 0.3
        if (valorEmprestimo > 50000):
            juros = 0.5
        saldo = float(conta_remetente.saldo)

        if (saldo*3.00 >= valorEmprestimo):
            conta_remetente.saldo += decimal.Decimal(valorEmprestimo)
            valorPagar = (valorEmprestimo)+(valorEmprestimo*juros)
            aprovado = True
            conta_remetente.save()
        else:
            raise serializers.ValidationError('Este valor não é válido para emprestimo')


        _mutable = request.POST._mutable

        request.POST._mutable = True
        request.data['valor'] = valorEmprestimo
        request.data['juros'] = juros
        request.data['valorPagar'] = valorPagar
        request.data['aprovado'] = aprovado
        request.POST._mutable = _mutable

        return super().create(request, *args, **kwargs)
    


class ParcelasListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = Parcelas.objects.all()
    serializer_class = ParcelasSerializer
