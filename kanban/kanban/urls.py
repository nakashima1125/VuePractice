from django.urls import path
from . import views

# app_name を設定することで、プロジェクトを通してグローバルにこのアプリケーションのURLを特定できる
app_name = "kanban"

urlpatterns = [
    path("", views.index, name="index"),
    path("home/", views.home, name="home"), 
    path('signup/', views.signup, name='signup'), 
]
