from django.views.generic import TemplateView
from django.http import HttpResponse

class IndexView(TemplateView):
  template_name = 'index.html'
    #template_nameに表示するテンプレートファイルのパスを指定

class TopView(TemplateView):
  template_name = 'top.html'
