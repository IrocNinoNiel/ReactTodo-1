import styles from './form.module.css'

export function TodoForm() {
  return (
   <div className={styles.main}>
      <form action="">
        <input type="text" name="" id="" placeholder='Title' className={styles.title} />
        <input type="submit" value="Add Item" className={styles.submit}/>
      </form>
   </div>
  );
}
