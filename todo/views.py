from audioop import reverse
from django.shortcuts import redirect, render
from django.views.generic import ListView, DetailView, CreateView, DeleteView, UpdateView
from todo.models import TodoModel
from .models import TodoModel
from django.urls import reverse_lazy
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required

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
  # formを送った後に遷移するページ（ないとURLを指定してとエラーがでる）
  success_url = reverse_lazy('list')

class TodoDelete(DeleteView):
  template_name = 'delete.html'
  # どのデータを消すのかで必要
  model = TodoModel
  # 削除した後にどこへ遷移するのかで必要
  success_url = reverse_lazy('list')

class TodoUpdate(UpdateView):
  template_name = 'update.html'
  model = TodoModel

  # データベースの何の情報をアップデートするのかで必要（HTML上で表示するのに必要）
  fields = ('title', 'memo', 'priority', 'duedate')
  success_url = reverse_lazy('list')


def signupFunc(request):
  if request.method == "POST":
    form = UserCreationForm(request.POST)
    # これは中身が規則通りに書かれているか判定（e.g.パスワードは４桁以上など）
    if form.is_valid():
      # データベースへ登録
      user_instance = form.save()
      login(request, user_instance)
      return redirect('list')
  else:
    # ユーザー登録に必要な項目をフォームで定義してある
    form = UserCreationForm()
  return render(request, 'signup.html', {"form" : form})

def loginFunc(request):
  print(request.POST)
  if request.method == 'POST':
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
      login(request, user)
      return redirect('list')
    else:
      return render(request, 'login.html', {})
  return render(request, 'login.html', {})

def indexFunc(request):
  return render(request, 'index.html', {})

def testFunc(request):
  return render(request, 'sidevar.html', {})
