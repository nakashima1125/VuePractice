import { Fragment, useState } from "react";

const Example = () => {
  const [fruit, setFruit] = useState("");
  const FruiteSelection = ["Apple", "Banana", "Cherry"];
  return (
    <Fragment>
      {/* <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
        <br />
      </p> */}
      {FruiteSelection.map((value) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={fruit === value}
              onChange={(e) => setFruit(e.target.value)}
            />
            {value}
          </label>
        );
      })}

      <h3>私は{fruit}が好きです。</h3>
    </Fragment>
  );
};

export default Example;
