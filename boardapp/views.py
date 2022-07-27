from django.http import HttpResponse
from django.shortcuts import render

def signupfunc(request):
  # {}はモデルのデータや任意のデータ
  return render(request, 'signup.html', {})
