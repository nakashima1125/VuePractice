from django.contrib import admin
from .models import TodoModel

#管理画面へ追加
admin.site.register(TodoModel)
