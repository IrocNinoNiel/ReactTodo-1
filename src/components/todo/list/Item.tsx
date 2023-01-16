import styles from './item.module.css'

export function TodoListItem() {
  return (
    <div className={styles.main}>
      <h4 className={styles.itemText}>Item 1 <i className="fas fa-times"></i></h4>
    </div>
  );
}
