import { background } from "@chakra-ui/react";
import { useState } from "react";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const style = {
    width: 120,
    height: 60,
    display: "block",
    fontWeight: "bold",
    // "border-radius": 9999,
    borderRadius: 9999,
    cursor: "pointer",
    border: "none",
    margin: "auto",
    // 空文字ならbackground自体は存在しないことになる。
    background: isSelected ? "pink" : "",
  };

  return (
    <>
      <button onClick={clickHandler} style={style}>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
