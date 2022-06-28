"""
WSGI（Web Server Gateway Interface）に関する設定を記述するファイルです。
ざっくり言うと、サーバーに関する設定を記述しますが、開発サーバーであれば初期設定で動作する。
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = get_wsgi_application()
