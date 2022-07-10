from dataclasses import field
from django import forms
from django.contrib.auth.models import User

from .models import List, Card

class UserForm(forms.ModelForm):
  # Metaクラスにモデルと、指定したモデルのフィールドを指定
  class Meta:
    model = User
    fields = ("username", "last_name", "first_name", "email")


class ListForm(forms.ModelForm):
  # リストのフォームにはtitleだけ指定。
  # userまで指定すると、データベースに登録された全てのユーザーから選択できる状態になってしまう
  # フォームの fields は 表示させる項目 と認識して、適切なフィールドを指定
  class Meta:
    model = List
    fields = ("title",)

class CardForm(forms.ModelForm):
  class Meta:
    model = Card
    fields = ("title", "description", "list")
