library(datasets)
data(iris)
df <- iris

dplyr::select(df, starts_with("Spe"), ends_with("th"))
