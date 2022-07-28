from django.shortcuts import render
from django.contrib.auth.models import User


def signupfunc(request):
  # 全てのUserデータをobjectへいれる
  object = User.objects.get(username = 'nakashima')
  print(object.email)

  if request.method == "POST":
    print('post')
  else:
    print('not post')
  # {}はモデルのデータや任意のデータ
  return render(request, 'signup.html', {})
