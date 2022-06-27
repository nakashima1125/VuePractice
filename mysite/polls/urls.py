# URLとWebページを紐付けるところ
# URLConf = 設定ファイル（urls.py）
# 同じようなデザインで内容が変わるページ（動的ページ）」を扱うのに適した仕組み

from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    # ex: /polls/数字の何か/
    path('<int:question_id>/', views.detail, name='detail'),
    # ex: /polls/数字の何か/results/
    path('<int:question_id>/results/', views.results, name='results'),
    # ex: /polls/数字の何か/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),
]
