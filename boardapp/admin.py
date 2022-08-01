from django.contrib import admin
from .models import BoardModel

# adminのサイトにBoardModelを認識させるコード（管理画面で見れるようになる）
admin.site.register(BoardModel)
