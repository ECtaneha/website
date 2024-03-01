import React from 'react'
import styles from '../HeroImage/heroImage.module.css'
import Image from 'next/image'
import localImage from '../../elements/hero-image1.jpg'

export const HeroImage = () => {
  return (
    <div className={styles.container}>
      {/* <div>
        <p className={`${styles.font} ${styles.fade1}`}>Kazuki</p>
        <p className={`${styles.font} ${styles.fade2}`}>Makes the</p>
        <p className={`${styles.font} ${styles.fade3}`}>Impossible</p>
        <p className={`${styles.font} ${styles.fade4}`}>Possible</p>
      </div> */}
      {/* <div className={styles.catchCopy}>
        <div className={styles.fade1}>
          <span className={styles.font}>人</span>
          <span className={styles.fontSmall}>と</span>
        </div>
        <div className={styles.fade2}>
          <span className={styles.font}>モノ</span>
          <span className={styles.fontSmall}>と</span>
        </div>
        <div className={styles.fade3}>
          <span className={styles.font}>わたしたち</span>
          <span className={styles.fontSmall}>と</span>
        </div>
      </div> */}
      <Image
        className={styles.image}
        width={800}
        height={600}
        src={localImage}
        alt={'heroimage'}
      />
    </div>
  )
}
