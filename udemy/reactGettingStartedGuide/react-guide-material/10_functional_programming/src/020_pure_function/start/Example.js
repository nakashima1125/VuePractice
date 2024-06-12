const Example = () => {
  const val1 = 2;
  const val2 = 9;
  const add = (val1, val2) => {
    // console.log()
    return val1 + val2;
  };
  return (
    <>
      <h3>純粋関数</h3>
      <p>{add(val1, val2)}</p>
    </>
  );
};

export default Example;
