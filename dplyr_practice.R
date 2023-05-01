library(dplyr)

library(datasets)
data(iris)
df <- iris

## Speで始まる文字, thで終わるカラムの出力
# dplyr::select(df, starts_with("Spe"), ends_with("th"))

## 特定の範囲で出力
# dplyr::select(df, Sepal.Width:Petal.Length, Species)

## 指定した変数以外
# dplyr::select(df, !Sepal.Width)

## 特定の範囲以外で出力
# dplyr::select(df, !(Sepal.Width:Petal.Length))

## 特定の文字列を含むcontainsと、everythingで残りの変数全て
# dplyr::select(df, contains("Sepal"), everything())

## 変数の中身を数える
# dplyr::count(df, Sepal.Width)

## フィルター
# dplyr::filter(df, Sepal.Width == 2.8 | Sepal.Width == 2.0 & Sepal.Width == 2.2)

## 特定変数の欠損値を除外する。
# dplyr::filter(df, !is.na("Sepal.Width"))
             
## 複数の値に該当する行を選び、その結果をcountへ渡す。
# dplyr::filter(df, Sepal.Width %in% "2.8") |>
# dplyr::count(Sepal.Width)

## 行選択で特定の列番号で選ぶ
# dplyr::slice(df, 9:10)

## pipe(|>)はいくつでも繋げられる。
# df |> 
#   dplyr::filter(Sepal.Width > 2.0) |>
#   dplyr::select(Petal.Width, Species)

## mutateはカラムにおける平均値、合計値などの演算ができ、カラム追加もできる。
# df |>
#   dplyr::mutate(なんかの合計=2.0)


      