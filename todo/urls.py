from django.urls import path, include
from .views import Todolist, TodoDetail


urlpatterns = [
    path('list/', Todolist.as_view()),
    path('detail/', TodoDetail.as_view()),
]
