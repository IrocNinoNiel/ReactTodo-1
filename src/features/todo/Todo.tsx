import styles from './todo.module.css'
import { TodoHeader } from '../../components/todo/header/Header';
import { TodoForm } from '../../components/todo/form/Form';
import { TodoList } from '../../components/todo/list/List';

export function Todo() {
  return (
    <div className={styles.main}>
      <TodoHeader/>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}
