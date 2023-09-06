from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse
from django.http import JsonResponse
from questions.models import Question, Mark, User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .serializers import MarkSerializer
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import AllowAny

def index(request):
    all_questions = Question.objects.all()
    json_questions = serializers.serialize('json', all_questions)
    return JsonResponse(json_questions, safe=False)



class MarkView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    def post(self, request):
        #breakpoint()
        data = request.data
        
        serializer = MarkSerializer(data = request.data, context = {'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

# Create your views here.