import pandas as pd
import matplotlib.pyplot as plt
import numpy as np


def linear_regression(train_X, train_Y):
    tmp = np.linalg.inv(train_X.T @ train_X) @ (train_X.T @ train_Y)
    pridict = tmp @ train_X.T
    return pridict


if __name__ == '__main__':
    num = 100
    np.random.seed(0)
    x = np.linspace(10, 40, num) # temprature
    epsilon = np.random.normal(loc=0, scale=5, size=len(x)) #ガウシアンノイズ
    y = x + epsilon # sales

    train_X = np.concatenate((np.ones((num, 1)), x[:, None]), axis=1)
    train_Y = y

    pridict_Y = linear_regression(train_X, train_Y)
#   print("予測データ", pridict_Y.shape)
    plt.scatter(train_X[:, 1], y, s=50, c="b")
    plt.plot(train_X[:, 1], pridict_Y, c="r")
    # plt.xlabel("気温")
    # plt.legend()
    plt.show()
