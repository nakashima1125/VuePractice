const Example = () => {
  const clickHandlier = () =>{
    alert('クリックされた')
  }
  const clickHandlier2 = () =>{
    console.log("ボタンがクリックされました")
  }
  return (
    <>
    <button onClick={clickHandlier}>クリックしてね</button>
    <button onClick={clickHandlier2}>クリックしてね</button>
    <button onClick={() =>{alert('test')}}>クリックしてね</button>
    </>
  );
};

export default Example;
