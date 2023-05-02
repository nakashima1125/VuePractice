# データセットの読み込み
# https://skume.net/entry/2021/04/17/000149
library(datasets)
data(attenu)
df <- attenu

# データを綺麗にし、カラムの表示
# install.packages("janitor")
library(janitor)
df <- df |>
  clean_names(case = "old_janitor")
names(df)


