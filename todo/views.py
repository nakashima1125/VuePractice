from django.shortcuts import render
from django.views.generic import ListView, DetailView, CreateView
from todo.models import TodoModel
from .models import TodoModel


class Todolist(ListView):
  # DIRSのところ
  template_name = 'list.html'
  model = TodoModel

class TodoDetail(DetailView):
  template_name = 'detail.html'
  model = TodoModel

class TodoCreate(CreateView):
  template_name = 'create.html'
  # モデルの指定により、どこに保存すべきかを特定する
  model = TodoModel
  # form.as_pで表示される
  fields = ('title', 'memo', 'priority', 'duedate')



