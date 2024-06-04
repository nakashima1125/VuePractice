import { Fragment, useState } from "react";

export const Form = ({ createTodos }) => {
  const [enteredTodos, setEnteredTodos] = useState("");
  const addTodo = (e) => {
    // onsubmitのデフォルトの挙動（enter後に再レンダリング）を阻止。
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodos,
    };
    createTodos(newTodo);

    // 入力欄の初期化
    setEnteredTodos("");
  };
  return (
    <Fragment>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodos}
          onChange={(e) => setEnteredTodos(e.target.value)}
        />
        <button onClick={addTodo}>追加</button>
        <span>{enteredTodos}</span>
      </form>
    </Fragment>
  );
};
