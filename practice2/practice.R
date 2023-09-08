# データセットの読み込み
# https://skume.net/entry/2021/04/17/000149
library(datasets)
ds <- beaver1
data(ds)
df <- ds
names(df)

# データを綺麗にする
# ' と " を削除、%はpercent_に置き換え、#はnumber_に置き換え、文字列先頭にある、（@*[]など）は削除する。
df <- df |>
  janitor::clean_names(case = "old_janitor")
names(df)

# 日付型へ変更（日付・時刻への変換(ymd_hms)）
df <-
  df |>
  dplyr::mutate(day = lubridate::ymd(month, tz="Asia/Tokyo"))
dplyr::select(df, day)

# 高いか低いか普通かのカラムの追加
df <-
  df |>
  dplyr::mutate(temp_group = dplyr::case_when(
    temp > 0 & temp <= 35.0 ~ "低い",
    temp > 35 & temp <= 37.0 ~ "普通",
    temp >37  & temp <= 40.0 ~ "高い"),
  temp_group = factor(temp_group) #因子型(固定の許容値でカテゴリを順序付けできる型)へ変換
  )
names(df)

# 欠損値の削除
df <-
  df |>
  dplyr::tidyr::drop_na(temp)

# 相関関係
df |>
  dplyr::select(time, temp) |>
  corrr::correlate()

# 散布図
library(tidyverse)
# geom_pointでx軸とy軸を決定する。
ggplot(df) + geom_point(aes(time, temp))

# 散布図
# geom_countは観測数に比例して点のサイズが決まります。
# theme_classic()は背景をなくす
ggplot(df) + geom_count(aes(time, temp),
                        color = "deepskyblue2", alpha = 0.5) + theme_classic()

# 層別に散布図
# facet_wrap()は層別にしたいカラムを入れる
ggplot(df) + geom_count(aes(time, temp),
                        color = "deepskyblue2", alpha = 0.5) + facet_wrap(~ day)


# 重回帰モデルの作成
# dayが目的変数、それ以外が説明変数
res <-lm(day ~ time + 
               temp,
         data = df)
summary(res)

library(broom)
res_tidy <- tidy(res) # 回帰係数
res_tidy
