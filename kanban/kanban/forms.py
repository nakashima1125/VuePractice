from django import forms
from django.contrib.auth.models import User

class UserForm(forms.ModelForm):
  # Metaクラスにモデルと、指定したモデルのフィールドを指定
  class Meta:
    model = User
    fields = ("username", "last_name", "first_name", "email")
