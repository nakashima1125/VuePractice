import pandas as pd
import matplotlib.pyplot as plt
import numpy as np


def linear_regression(train_X, train_Y):
    tmp = np.linalg.inv(train_X.T @ train_X) @ (train_X.T @ train_Y)
    pridict = tmp @ train_X.T
    return pridict


if __name__ == '__main__':
    data = pd.DataFrame({"temprature": [4, 10, 6, 11, 12, 13, 20, 13, 24, 26, 12, 18, 22, 18, 20, 23, 26, 28],
                         "sales": [30, 35, 28, 38, 35, 40, 60, 34, 63, 65, 38, 40, 41, 43, 42, 55, 65, 69]})

    print(data["temprature"].values.shape)
    train_X = np.concatenate(
        (np.ones((18, 1)), data["temprature"].values[:, None]), axis=1)
    train_Y = data["sales"].values

    pridict_Y = linear_regression(train_X, train_Y)
#   print("予測データ", pridict_Y.shape)
    plt.scatter(data["temprature"], data["sales"], s=80, c="b")
    plt.plot(train_X[:, 1], pridict_Y, c="r")
    # plt.xlabel("気温")
    # plt.legend()
    plt.show()
