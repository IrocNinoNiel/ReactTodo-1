import { useState } from "react";
import { Todo1 } from "../../../interfaces/Todo1";
import { deleteTodo } from "../../../services/TodoService";
import styles from "./list.module.css";
import { TodoListItem } from "./Item";
import axios from "axios";

export function TodoList(props: {
  todos: Todo1[];
  getAndSetTodos: () => Promise<void>;
}) {
  const { todos, getAndSetTodos } = props;
  const generateTodoListElements = (todos: Todo1[]) => {
    return todos.map((todo) => {
      return (
        <TodoListItem
          key={todo.id}
          todo={todo}
          getAndSetTodos={getAndSetTodos}
        />
      );
    });
  };
  return <div className={styles.main}>{generateTodoListElements(todos)}</div>;
}
