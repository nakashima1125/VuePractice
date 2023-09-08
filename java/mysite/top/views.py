from django.views.generic import TemplateView

class IndexView(TemplateView):
  template_name = 'index.html'

class TopView(TemplateView):
  template_name = 'top.html'
