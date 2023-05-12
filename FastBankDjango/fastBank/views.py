from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets


class ClienteListarDetalhar(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
