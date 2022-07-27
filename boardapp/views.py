from django.http import HttpResponse
from django.shortcuts import render

def signupfunc(request):
  if request.method == "POST":
    print('post')
  # {}はモデルのデータや任意のデータ
  return render(request, 'signup.html', {})
