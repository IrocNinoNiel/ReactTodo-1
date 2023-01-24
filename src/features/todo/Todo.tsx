import styles from "./todo.module.css";
import { TodoHeader } from "../../components/todo/header/Header";
import { TodoForm } from "../../components/todo/form/Form";
import { TodoList } from "../../components/todo/list/List";
import { Todo1 } from "../../interfaces/Todo1";
import { createTodo, getAllTodos } from "../../services/TodoService";
import { useEffect, useState } from "react";

export function Todo() {
  const [todos, setTodos] = useState<Todo1[]>([]);

  const getAndSetTodos = async () => {
    const todos = await getAllTodos();
    setTodos(todos);
  };

  useEffect(() => {
    getAndSetTodos();
  }, []);

  return (
    <div className={styles.main}>
      <TodoHeader />
      <TodoForm />
      <TodoList todos={todos} getAndSetTodos={getAndSetTodos} />
    </div>
  );
}
