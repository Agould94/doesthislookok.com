from django.urls import include, path

from . import views
from .views import CreateMarkView

urlpatterns = [
    path("", views.index, name = "index"),
    path('questions/', CreateMarkView.as_view(), name = 'create-mark')
]