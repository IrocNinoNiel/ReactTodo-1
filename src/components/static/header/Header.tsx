import styles from './header.module.css'
import logo from '../../../img/logo.png'

export function Header() {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.title}>
        <h1>React Course - Project 1</h1>
      </div>
    </div>
  );
}

