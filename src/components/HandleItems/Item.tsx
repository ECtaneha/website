import React from 'react'
import styles from './handleItems.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type item = {
  name: string,
  class: string[],
  thumbnail: string[],
  width: number,
  height: number,
  alt: string,
}

export const Item = (props: item) => {

  return (
    <div className={styles.itemContainer}>
      <img
        className={styles.image}
        src={props.thumbnail[0]}
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
      <p className={styles.itemInduction}>詳細ページへ</p>
      {/* <KeyboardArrowDownIcon className={styles.itemArrow}/> */}
      <div className={styles.popUp}>
        <img
          className={styles.popUpImage}
          src={props.thumbnail[1]}
          alt={props.alt}
        />
      </div>
    </div>
  )
}
