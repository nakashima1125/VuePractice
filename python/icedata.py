import pandas as pd
import matplotlib.pyplot as plt

data = pd.DataFrame({
    "temprature":[4,10,6,11,12,13,20,13,24,26,12,18,22,18,20,23,26,28],
    "sales":[30,35,28,38,35,40,60,34,63,65,38,40,41,43,42,55,65,69]
    })

plt.scatter(data["temprature"], data["sales"], s=80)
# plt.xlabel("気温")
# plt.legend()
plt.show()
