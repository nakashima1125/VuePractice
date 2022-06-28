# アプリケーション特有のカスタム設定を記述するファイル
from django.apps import AppConfig

class KanbanConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'kanban'
