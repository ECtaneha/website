import React from 'react'
import Image from 'next/image'
import styles from './aboutUs.module.scss'

type item = {
  title: string,
  description: string,
  src: string,
  width: number,
  height: number,
  alt: string,
}

export const Card = (props: item) => {
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.h3}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.space}></div>
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt}
      />
    </div>
  )
}
