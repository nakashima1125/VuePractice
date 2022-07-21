from django.shortcuts import render
from django.views.generic import ListView, DetailView
from todo.models import TodoModel
from .models import TodoModel


class Todolist(ListView):
  # DIRSのところ
  template_name = 'list.html'
  model = TodoModel

class TodoDetail(DetailView):
  template_name = 'detail.html'
  model = TodoModel
  



