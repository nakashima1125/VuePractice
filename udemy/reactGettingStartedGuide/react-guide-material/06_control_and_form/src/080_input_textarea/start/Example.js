import { useState } from "react";

const Example = () => {
  const [text, setText] = useState("");
  const clearVal = () => setText("");
  return (
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
      <br />
      <label htmlFor="123">ラベル</label>
      <input
        id="123"
        placeholder="こんちは"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={clearVal}>クリア</button>
    </p>
  );
};

export default Example;
