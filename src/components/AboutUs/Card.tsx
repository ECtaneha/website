import React from 'react'
import styles from './aboutUs.module.scss'
type item = {
  title: string,
  description: string,
  src: string,
  alt: string,
}

export const Card = (props: item) => {
  return (
    <div className={styles.cardWrapper}>
      <h3 className={styles.h3}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.space}></div>
      <img
        className={styles.image}
        src={props.src}
        alt={props.alt}
      />
    </div>
  )
}
