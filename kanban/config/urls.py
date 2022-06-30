"""
ルーティング（URLの設定）を記述するファイルです。
プロジェクトを作成した段階で、自動的にadminページ（管理画面機能）のルーティングが設定されています。
"""
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path("kanban/", include("kanban.urls")),
    path('kanban/', include('django.contrib.auth.urls')), 
]
