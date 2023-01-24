import styles from "./item.module.css";
import { useState } from "react";
import { Todo1 } from "../../../interfaces/Todo1";

export function TodoListItem(props: {
  todo: Todo1;
  getAndSetTodos: () => Promise<void>;
}) {
  const { todo, getAndSetTodos } = props;
  return (
    <div className={styles.main}>
      <h4 className={styles.itemText}>
        {todo.title} <i className="fas fa-times"></i>
      </h4>
    </div>
  );
}
