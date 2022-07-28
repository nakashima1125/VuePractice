from django.db import IntegrityError
from django.shortcuts import render
from django.contrib.auth.models import User


def signupfunc(request):
  if request.method == "POST":
    username = request.POST['username']
    password = request.POST['password']
    try:
      user = User.objects.create_user(username, '', password)
    # エラー文からわかる 
    except IntegrityError:
      return render(request, 'signup.html', {'error' : "このユーザーは登録されています"})
  return render(request, 'signup.html', {})
