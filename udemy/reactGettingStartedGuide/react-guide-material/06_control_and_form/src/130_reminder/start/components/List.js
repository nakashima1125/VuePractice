import { Fragment } from "react";

export const List = ({ todos, deleteTodos }) => {
  const completeTodo = (id) => {
    deleteTodos(id);
  };
  return (
    <Fragment>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <button onClick={() => completeTodo(todo.id)}>完了</button>
            <span>{todo.content}</span>
          </div>
        );
      })}
    </Fragment>
  );
};
