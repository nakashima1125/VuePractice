from django.db import models
from django.contrib.auth.models import User


class List(models.Model):
  title = models.CharField(max_length=200)
  # ForeignKey は一対多を表現するリレーションシップ型で、
  # 第一引数にリレーション先のモデルをon_delete引数でデータ削除時の挙動を指定
  user = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
    return self.title

class Card(models.Model):
  title = models.CharField(max_length=200)
  description = models.TextField() #文字数制限なし

  # カード１個に対してUSER、Listを複数というリレーションモデルを作成
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  list = models.ForeignKey(List, on_delete=models.CASCADE)

  def __str__(self):
    return self.title
