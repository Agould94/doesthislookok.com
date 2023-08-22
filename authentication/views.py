from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate, login, logout


@api_view(['POST'])
@permission_classes([])

def register(request):
    if request.method == 'POST':
        username=request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

