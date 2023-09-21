import datetime

from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Question(models.Model):
    user = models.ForeignKey('users.AppUser', on_delete=models.CASCADE)
    #mark = models.ForeignKey('questions.mark', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    pub_date = models.DateTimeField("date published")
    image = models.ImageField(upload_to='question_images/')

    def __str__(self):
        return self.title
    
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
    

class Image(models.Model):
    mark = models.ForeignKey('questions.Mark', on_delete=models.PROTECT,  related_name="mark_images")
    image = models.ImageField(upload_to='mark_images/')

class Mark(models.Model):
    user = models.ForeignKey('users.AppUser', on_delete=models.CASCADE)
    question = models.ManyToManyField(Question)
    size_in_mm = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField()
    color = models.TextField()
    texture = models.TextField()
    has_grown = models.BooleanField()
    position_on_body_x = models.DecimalField(max_digits=10, decimal_places=2)
    position_on_body_y = models.DecimalField(max_digits=10, decimal_places=2)
    pub_date = models.DateTimeField(default = timezone.now)

    def __str__(self):
        return self.description
    def was_published_recently(self):
       return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

class Answer(models.Model):
    should_see_doctor: models.BooleanField()
    response: models.TextField()
    level_of_concern: models.IntegerField()