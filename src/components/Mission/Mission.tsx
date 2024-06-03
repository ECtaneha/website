import React from 'react'
import globalStyles from '@/app/page.module.scss'
import styles from './mission.module.scss'

export const Mission = () => {

  return (
    <div className={`
      ${globalStyles.contentsWrapper}
      ${styles.addSpace}
    `}>
      <div className={styles.missionContainer}>
        <h2 className={globalStyles.h2}>
          <div className={globalStyles.h2Wrapper}>
            <div className={styles.missionTitle}>
              <p>タイシン　３つの使命</p>
              {/* <p>３つの使命</p> */}
            </div>
            <span>社会的意義</span>
          </div>
        </h2>
      </div>
      <div className={styles.missionImage}></div>
    </div>
  )
}
