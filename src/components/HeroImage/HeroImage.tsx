import React from 'react'
import styles from '../HeroImage/heroImage.module.css'
import Image from 'next/image'
import localImage from '/public/images/hero-image1.jpg'

export const HeroImage = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        width={1920}
        height={1000}
        src={localImage}
        alt={'heroimage'}
      />
    </div>
  )
}
