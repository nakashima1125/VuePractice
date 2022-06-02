import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import jax
import jax.numpy as jnp
from tqdm import tqdm

def fit(train_X, train_Y, a, X_star, eta, epoch):
    history = dict(error=np.zeros((epoch)))

    for t in tqdm(range(epoch)):
        da = jax.grad(obf_Linear_regression, argnums=(2))(train_X, train_Y, a)
        a -= eta * da # aのshape(2, 1)
        history['error'][t] = obf_Linear_regression(train_X, train_Y, a)
    return X_star @ a, history

def obf_Linear_regression(train_X, train_Y, a):
    # (100, 1) - ((100 ,2) @ (2, 1))
    E = jnp.sum((train_Y - (train_X @ a))**2)
    return E


if __name__ == '__main__':
    num = 30
    # np.random.seed(1)
    x_min = 0
    x_max = 10
    x = np.linspace(x_min, x_max, num) 
    eta = 1e-5
    epoch = 1000
    a = np.random.normal(loc=0, scale=1, size=(2, 1))
    
    epsilon = np.random.normal(loc=0, scale=1, size=len(x)) #ガウシアンノイズ
    y = x + epsilon 

    train_X = np.concatenate((jnp.ones((num, 1)), x[:, None]), axis=1)
    train_Y = y

    train_X = jnp.array(train_X)
    train_Y = jnp.array(train_Y)

    num_star = 300
    x_star = np.linspace(x_min, x_max, num_star)
    X_star = np.concatenate((jnp.ones((num_star, 1)), x_star[:, None]), axis=1)

    pridict_Y, history = fit(train_X, train_Y, a, X_star, eta, epoch)
    pridict_Y = np.array(pridict_Y)

    # print(pridict_Y)
    # plt.scatter(train_X[:, 1], y, s=10, c="b")
    # plt.plot(X_star[:, 1], pridict_Y, c="r")
    # plt.xlabel("気温")
    # plt.legend()

    t = np.arange(len(history["error"]))
    plt.plot(t, history["error"])

    plt.show()



