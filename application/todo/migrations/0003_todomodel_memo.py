# Generated by Django 4.0.6 on 2022-07-24 22:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_remove_todomodel_memo'),
    ]

    operations = [
        migrations.AddField(
            model_name='todomodel',
            name='memo',
            field=models.TextField(null=-2),
            preserve_default=-2,
        ),
    ]