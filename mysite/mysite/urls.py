from django.contrib import admin
from django.urls import include, path

urlpatterns = [
# path(URL, 関数またはクラス, name=URL名称)
# HTTPリクエストからリクエストされたURLに対応する関数またはクラスが実行される。
# include関数によりアプリケーション内のurls.pyを連結することができる。
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
]
