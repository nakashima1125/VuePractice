from django.contrib import admin

# include() 関数は他の URLconf への参照することができます。 
# Django が include() に遭遇すると、そのポイントまでに一致した URL の部分を切り落とし、次の処理のために残りの文字列をインクルードされた URLconf へ渡します。

from django.urls import include, path

urlpatterns = [
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
]
