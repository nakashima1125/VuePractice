# URLとWebページを紐付けるところ
# URLConf = 設定ファイル（urls.py）
# 同じようなデザインで内容が変わるページ（動的ページ）」を扱うのに適した仕組み

from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
