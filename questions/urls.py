from django.urls import include, path
from . import views


urlpatterns = [
    path("", views.index, name = "index"),
    path('create-mark', views.MarkView.as_view(), name = 'create-mark')
]