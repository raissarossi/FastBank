from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('clientes', views.ClienteListarDetalhar)
router.register('contas', views.ContaListarDetalhar)
router.register('contaspf', views.ClientePFListarDetalhar)
router.register('contaspj', views.ClientePJListarDetalhar)

urlpatterns = [] + router.urls