# Generated by Django 4.2.4 on 2023-08-22 20:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0003_mark_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mark',
            old_name='user_id',
            new_name='user',
        ),
    ]
