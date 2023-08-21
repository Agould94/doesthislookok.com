from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse
from django.http import JsonResponse
from questions.models import Question, Mark, User

def index(request):
    all_questions = Question.objects.all()
    json_questions = serializers.serialize('json', all_questions)
    return JsonResponse(json_questions, safe=False)


    

# Create your views here.