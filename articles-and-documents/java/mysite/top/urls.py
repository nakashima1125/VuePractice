from django.urls import path
from . import views
 
app_name = 'top'
urlpatterns = [
    path('index/', views.IndexView.as_view(), name='index'),
    path('', views.TopView.as_view(), name='top'),
]

