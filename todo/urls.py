from django.urls import path, include
from .views import Todolist, TodoDetail, TodoCreate


urlpatterns = [
    path('list/', Todolist.as_view(), name= 'list'),
    path('detail/<int:pk>/', TodoDetail.as_view(), name = 'detail'),
    path('create/', TodoCreate.as_view(), name = 'create'),
]
