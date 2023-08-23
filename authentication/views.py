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

        if not (username and email and password):
            return Response({'error': 'Missing required fields'}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, email = email, password = password)
        return Response({"message":"User registered successfully"}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([])
def user_login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            user_data = {
                'id':user.id,
                'username':user.username,
                'email':user.email
            }
            return Response({'user':user_data, 'message':"User logged in successfully"}, status = status.HTTP_200_OK)
        else: 
            return Response({'error':'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
@api_view(['GET'])
@permission_classes([])
def user_logout(request):
     if request.method == 'GET':
          logout(request)
          return Response({'message':'User logged out successsfully'}, status=status.HTTP_200_OK)