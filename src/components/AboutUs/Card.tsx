import React from 'react'
import Image from 'next/image'
import styles from './aboutUs.module.scss'
type item = {
  title: string,
  description: string,
  src: string,
  alt: string,
}

export const Card = (props: item) => {
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.h3}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.space}></div>
      <Image
        className={styles.image}
        src={props.src}
        width={200}
        height={200}
        alt={props.alt}
      />
    </div>
  )
}
