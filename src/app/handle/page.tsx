import globalStyles from '../page.module.scss'
import styles from './page.module.scss'
import classes from './classes.json'

export default function Page() {
  return (
    <div className={globalStyles.contentsContainer}>
      <div className={globalStyles.container}>
        <h1 className={styles.container}>取扱品目</h1>
      </div>
    </div>
  )
}