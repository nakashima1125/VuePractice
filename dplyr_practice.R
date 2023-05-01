library(datasets)
data(iris)
df <- iris

# Speで始まる文字, thで終わるカラムの出力
# dplyr::select(df, starts_with("Spe"), ends_with("th"))

# 特定の範囲で出力
dplyr::select(df, Sepal.Width:Petal.Length, Species)
