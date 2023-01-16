import styles from './list.module.css'
import { TodoListItem } from './Item';

export function TodoList() {
  return (
    <div className={styles.main}>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
    </div>
  );
}
