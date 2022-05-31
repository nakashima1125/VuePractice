import pandas as pd
import matplotlib.pyplot as plt
from pkg_resources import safe_extra


def linear_regression(train_X, train_Y):
    pass


if __name__ == '__main__':
    data = pd.DataFrame({"temprature": [4, 10, 6, 11, 12, 13, 20, 13, 24, 26, 12, 18, 22, 18, 20, 23, 26, 28],
                         "sales": [30, 35, 28, 38, 35, 40, 60, 34, 63, 65, 38, 40, 41, 43, 42, 55, 65, 69]})

    train_X = data["temprature"]
    train_Y = data["sales"]
#   pridict_Y = linear_regression(train_X, train_Y)

#   print("予測データ", pridict_Y.shape)
    plt.scatter(data["temprature"], data["sales"], s=80)
    # plt.xlabel("気温")
    # plt.legend()
    plt.show()
