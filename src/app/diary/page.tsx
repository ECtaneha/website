import globalStyles from '../page.module.css'
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={globalStyles.contentsContainer}>
      <h1 className={styles.container}>猫日記</h1>
    </div>
  )
}