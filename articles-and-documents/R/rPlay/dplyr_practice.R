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

## mutateはカラムにおける平均値、合計値などの演算ができ、カラム追加もできる関数。
# df |>
#   dplyr::mutate(なんかの合計=2.0)

## summariseはカラムを集計してくれる関数。欠損値があるとna.rm = TRUEを指定しないと計算しない。
# df |>
#   dplyr::summarise(Sepal.Width_mean = mean(Sepal.Width), na.rm = TRUE)


## across()はその引数の変数であるカラムに対して、次に続く関数を適応せよという意味の関数。
## c()は引数に渡したオブジェクトをベクトルかリストの形式で結合してくれる関数
## list()はリスト形式で記述するときに使用するだけでなく、単純に実行した場合は同じ列名のまま結果を返してくれる。
## そこで、無名関数を使い「mean = 」などで名前をつけることで、summariesで帰ってきた結果に対して、新規に列名_meanの列を作成する。
# df |>
#   dplyr::summarize(dplyr::across(c(Sepal.Length, Sepal.Width),
#                                  list(mean = \(x) mean(x, na.rm=TRUE),
#                                       sd = \(x) sd(x, na.rm = TRUE))))


## group byでグループごとに計算する。
df |>
  dplyr::group_by(Species) |>
  dplyr::summarise(Sepal.Length_mean = mean(Sepal.Length, na.rm = TRUE))


      