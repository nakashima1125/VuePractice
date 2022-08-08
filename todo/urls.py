from django.urls import path, include
from .views import Todolist, TodoDetail, TodoCreate, TodoDelete, TodoUpdate, signupFunc, loginFunc, indexFunc

urlpatterns = [
    path('list/', Todolist.as_view(), name= 'list'),
    # どのデータの詳細を見るのかで<int:pk>がいる
    path('detail/<int:pk>/', TodoDetail.as_view(), name = 'detail'),
    path('create/', TodoCreate.as_view(), name = 'create'),
    # どのデータを消すのかで<int:pk>がいる
    path('delete/<int:pk>/', TodoDelete.as_view(), name='delete'),
    path('update/<int:pk>/', TodoUpdate.as_view(), name='update'),
    path('signup/', signupFunc, name='signup'),
    path('login/', loginFunc, name='login'),
    path('index/', indexFunc, name='index')
]
