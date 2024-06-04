import { Fragment, useState } from "react";
import { List } from "./List";
import { Form } from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);

  const deleteTodos = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const createTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <Fragment>
      <List todos={todos} deleteTodos={deleteTodos} />
      <Form todos={todos} createTodos={createTodos} />
    </Fragment>
  );
};

export default Todo;
