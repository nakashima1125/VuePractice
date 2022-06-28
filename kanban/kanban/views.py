from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    # return HttpResponse("仮のトップページ")
    return render(request, "kanban/index.html") 
