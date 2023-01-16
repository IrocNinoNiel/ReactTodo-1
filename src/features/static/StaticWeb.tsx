import { Header } from '../../components/static/header/Header';
import { Body } from '../../components/static/body/Body';
import styles from './static.module.css'

export function StaticWeb() {
  return (
   <div className={styles.main}>
      <Header/>
      <Body/>
   </div>
  );
}
