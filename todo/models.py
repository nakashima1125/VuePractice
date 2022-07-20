from turtle import title
from django.db import models

class TodoModel(models.Model):
  title = models.CharField(max_length=100)
  memo = models.TextField()
# 管理画面でオブジェクトが作成されたときに実行されるもの
  def __str__(self):
    return title

