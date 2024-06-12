const Example = () => {
  const nums = [1, 2, 3];
  const sum = (arr) => {
    const nums = arr;
    let sumValue = 0;
    for (let i = 0; i < nums.length; i++) {
      sumValue += nums[i];
    }
    return sumValue;
  };

  const numObj = {
    nums: [1, 2, 3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      // for (let i = 0; i < nums.length; i++) {
      //   sumValue += nums[i];
      // }
      nums.forEach((num) => (sumValue += num));
      return sumValue;
    },
  };

  return (
    <>
      <h3>状態管理と処理を分離</h3>
      <p>状態（データ）と処理（やりたいこと）は切り離す</p>
      <p>オブジェクト型指向：{numObj.sum()}</p>
      <p>関数型：{sum(nums)}</p>
    </>
  );
};

export default Example;
