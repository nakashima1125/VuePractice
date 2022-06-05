# jax.tree_multimapを使えば、もっと綺麗に勾配法が書ける

import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import jax
import jax.numpy as jnp
from tqdm import tqdm
from jax import grad

def fit(train_X, train_Y, params, eta, epoch):
    history = dict(error=np.empty((epoch)),
                   param=np.empty((epoch, 2, 1)))

    grad_fn = jax.grad(obf_Linear_regression)
    for t in tqdm(range(epoch)):
        E = lambda params: obf_Linear_regression(train_X, train_Y, params)
        dEda = grad(E, argnums=(0))(params)
        # grad_E = jax.grad(obf_Linear_regression)
        params['a0'] -= eta * dEda['a0']
        params['a1'] -= eta * dEda['a1']
        # history['param'][t] = a[t]
        # history['error'][t] = obf_Linear_regression(train_X, train_Y, a)
    return params

@jax.jit
def obf_Linear_regression(train_X, train_Y, params):
    # (100, 1) - ((100 ,2) @ (2, 1))
    # N, _ = train_X.shape
    Y_hat = (train_X * params['a1']) + params['a0']
    # E = (1 / (2*N))* jnp.sum((train_Y - Y_hat)**2)
    E = jnp.power(train_Y - Y_hat, 2).mean()
    return E


if __name__ == '__main__':
    num = 200
    # np.random.seed(1)
    x_min = 0
    x_max = 10
    x = np.linspace(x_min, x_max, num)[:,None]
    eta = 8e-3
    epoch = 1000

    params = {
    'a0': jnp.zeros(x.shape[1:]),
    'a1': 0.
    }

    # print(x.shape)
    # print(params['a0'][:,None].shape)
    
    epsilon = np.random.normal(loc=0, scale=5e-1, size=x.shape) #ガウシアンノイズ
    y = x + epsilon 
    # print(y.shape)

    train_X = jnp.array(x)
    train_Y = jnp.array(y)

    num_star = 300
    x_star = np.linspace(x_min, x_max, num_star)
    # X_star = np.concatenate((np.ones((num_star, 1)), x_star[:, None]), axis=1)
    # print(X_star)

    params = fit(train_X, train_Y, params, eta, epoch)

    yy = x_star * params['a1'] + params['a0']

    plt.plot(x_star, yy)


    # print(history['param'][-1])
    # pridict_Y = np.array(X_star @ history['param'][-1])

    plt.scatter(train_X[:, 1], y, s=10, c="b")
    # plt.plot(x_star, pridict_Y, c="r")

    # # print(history['param'])

    # # t = np.arange(len(history["error"]))
    # # plt.plot(t, history["error"])

    plt.show()



