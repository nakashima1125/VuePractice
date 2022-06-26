from django.shortcuts import render
from django.http import HttpResponse

# データベースからデータをやり取り、そのデータを編集、整理する重要な役割です

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
