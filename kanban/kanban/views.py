from django.shortcuts import render
from django.contrib.auth import login 
from django.contrib.auth.forms import UserCreationForm 
from django.shortcuts import render, redirect 

# ログイン画面
def index(request):
    return render(request, "kanban/index.html") 

# 新規登録完了画面
def home(request):
    return render(request, "kanban/home.html")

# サインアップ
def signup(request):
  # POST : Webサーバに送る値を見えないところにくっつけて送るやり方
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user_instance = form.save()
            login(request, user_instance)
            return redirect("kanban:home")
  # GET : Webサーバに送る値をURLにくっつけて送るやり方（ページくれのリクエスト）
    else:
      # Djangoに用意されているフォームクラスをインスタンス化
        form = UserCreationForm()

    context = {
        "form": form
    }
    # contextをテンプレートに渡している
    return render(request, 'kanban/signup.html', context)
