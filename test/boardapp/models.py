from distutils.command.upload import upload
from unittest.util import _MAX_LENGTH
from urllib.parse import MAX_CACHE_SIZE
from django.db import models

class BoardModel(models.Model):
  title = models.CharField(max_length=100)
  content = models.TextField()
  author = models.CharField(max_length=50)
  #  upload_toに何も書かない場合は、setting.pyに書いてるところに画像が保存される
  sns_image = models.ImageField(upload_to='')
  good = models.IntegerField(null=True, blank=True, default=0)
  # 既読数
  read = models.IntegerField(null=True, blank=True, default=0)
  # 同じ人が推しても既読が増えないためのもの
  readtext = models.TextField(null=True, blank=True, default="")

  def __str__(self):
    return self.title

