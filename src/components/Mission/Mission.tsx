import React from 'react'
import globalStyles from '@/app/page.module.scss'
import styles from './mission.module.scss'

export const Mission = () => {

  return (
    <div className={globalStyles.contentsWrapper}>
      <div className={styles.missionContainer}>
        <h2 className={globalStyles.h2}>
          <div className={globalStyles.h2Wrapper}>
            <p>タイシン　３つの使命</p>
            <span>mission</span>
          </div>
        </h2>
        <div className={styles.missionImage}>
      </div>
    </div>
    </div>
  )
}
