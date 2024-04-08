""" アクセスできるユーザーを制限する"""

from django.contrib.auth.mixins import UserPassesTestMixin

class OnlyYouMixin(UserPassesTestMixin):
  # このTrueが制限に引っかかった場合に例外を発生させるよう設定している
  # 認証に失敗した場合に例外を発生させるかログインページにリダイレクトさせるかを raise_exception の値で切り替えることができる。
    raise_exception = True

    def test_func(self):
        user = self.request.user
        return user.pk == self.kwargs['pk']
