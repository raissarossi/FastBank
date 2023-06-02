from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

# router.register('clientes', views.ClienteListarDetalhar)
router.register('clientes', views.ClienteListarDetalhar)
router.register('contas', views.ContaListarDetalhar)
router.register('contaspf', views.ClientePFListarDetalhar)
router.register('contaspj', views.ClientePJListarDetalhar)
router.register('movimentacao', views.MovimentacaoListarDetalhar)
router.register('cartoes', views.CartoesListarDetalhar)
router.register('emprestimo', views.EmprestimoListarDetalhar)

urlpatterns = [
    path('contas/<str:chavePix>', view=views.ContaVerificarPix.as_view())
] + router.urls