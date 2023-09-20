R.3.xではvroomでcsvを読み込むときに不具合がある。read_csvは昔は遅かったが最近は早くなり、vroomの代わりに使うことができる。
### Quarto
Reticulate パッケージで pythonを動かすことができるが、上手く動かないときがある。そのため正規のpythonで動かす必要がある。Rstudioでpythonを動かすならReticulateしかない？かもしれない。
Quartoで正規のpythonを動かすには下記のようにjupyter: python3とすればいい。念のためReticulateはアンインストールしておいたほうがいい。
また、pythonやQuarto、Rのプラグインやソフトフェアはインストールしておくこと。
---
title: "hoge"
editor: source
date: "hoge"
format: 
  html:
    embed-resources: true
editor_options: 
  chunk_output_type: console
***jupyter: python3***
---