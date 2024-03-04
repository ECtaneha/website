import globalStyles from '../page.module.scss'
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={globalStyles.contentsContainer}>
      <div className={globalStyles.container}>
        <h1 className={styles.container}>採用</h1>
      </div>
    </div>
  )
}