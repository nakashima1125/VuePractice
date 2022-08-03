from django.db import IntegrityError
from django.shortcuts import get_object_or_404, redirect, render
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import BoardModel
from django.shortcuts import get_object_or_404

def signupfunc(request):
  if request.method == "POST":
    username = request.POST['username']
    password = request.POST['password']
    print(username)
    try:
      user = User.objects.create_user(username, '', password)
    except IntegrityError:
      return render(request, 'signup.html', {'error' : "このユーザーは登録されています"})
  return render(request, 'signup.html', {})


def loginfunc(request):
  if request.method == 'POST':
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    print(username)
    print(password)
    if user is not None:
        login(request, user)
        return redirect('list')
    else:
        return render(request, 'login.html', {})
  return render(request, 'login.html', {})

# デコレータのことで下記の関数を実行する前に実行するもの
# @login_required
def listfunc(request):
  object_list = BoardModel.objects.all()
  return render(request, 'list.html', {'object_list' : object_list})

def logoutfunc(request):
    logout(request)
    return redirect('login')

# pkはurls.pyのpkで、それを取ってくる
def detailfunc(request, pk):
  # 対象とするモデルの対象の番号があり、それを返し、なければ404エラーを返す。
  object = get_object_or_404(BoardModel, pk=pk)
  return render(request, 'detail.html', {'object':object})


def goodfunc(request, pk):
  # get_object_or_404も使えるが練習のため、色々な書き方を試す
  object = BoardModel.objects.get(pk=pk)
  object.good = object.good + 1
  object.save()
  return redirect('list')


def readfunc(request, pk):
  object = BoardModel.objects.get(pk=pk)
  # loginしているusernameを取得
  username = request.user.get_username()
  # すでに既読した者の中にログインしているユーザーを含んでいるかどうか
  if username in object.readtext:
    return redirect('list')
  else:
    object.read = object.read + 1
  # 既読したユーザーを付け足していく（空白で挟む、しかし、同じ苗字などの対策はしていない）
    object.readtext = object.readtext + '' + username
    object.save()
    return redirect('list')
