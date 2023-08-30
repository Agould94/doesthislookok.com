from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth.base_user import BaseUserManager


# Create your models here.

class AppUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email: 
            raise ValueError('Email Required.')
        if not password:
            raise ValueError('Password Required.')
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()
        return user
    def create_super_user(self, email, password=None):
        if not email: 
            raise ValueError('Email Required.')
        if not password:
            raise ValueError('Password Required.')
        user = self.create_user(email, password)
        user.is_super_user = True
        user.save()
        return user
    
class AppUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=['username'] 
    objects = AppUserManager()
    def __str__(self):
        return self.username