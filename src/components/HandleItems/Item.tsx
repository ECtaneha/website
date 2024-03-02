import React from 'react'
import Image from 'next/image'
import styles from './handleItems.module.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

type item = {
  name: string,
  class: string[],
  src: string,
  width: number,
  height: number,
  alt: string,
}

export const Item = (props: item) => {
  return (
    <div className={styles.itemContainer}>
      <Image
        className={styles.image}
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt}
      />
      <div className={styles.descriptionWrapper}>
        <h3 className={styles.h3}>{props.name}</h3>
        <p className={styles.description}>
          {props.class.map((array, key)=> (
            <span
              key={key}
              className={styles.classArray}>
              {array}
            </span>
          ))}
        </p>
      </div>
      <PlayArrowIcon className={styles.itemArrow}/>
    </div>
  )
}
