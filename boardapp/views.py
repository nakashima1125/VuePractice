from django.db import IntegrityError
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import BoardModel

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
