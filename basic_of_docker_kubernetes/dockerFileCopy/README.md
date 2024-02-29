## index.html を apche コンテナで表示する。

1. docker run で Apche コンテナを作成
2. http://localhost:8089/で確認
3. cp コマンドで apache コンテナ内に index.html をコピー
   - docker run --name apa000ex19 -d -p 8089:80 httpd
4. http://localhost:8089/で確認
