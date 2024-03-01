import React from 'react'
import styles from './hexagon.module.css'

type hex = {
  index: number,
  title: string,
  description: string,
}

export const Hexagon = (props: hex) => {


  return (
    <div className={
      `
      // ${styles.clipPathShadow}
      ${props.index === 0
        ? styles.leftShadow
        : props.index === 1
          ? styles.centerShadow
          : styles.rightShadow
      }
    `}>
        <div className={
          `${styles.clipPathHexagon}
          ${props.index === 0
            ? styles.left
            : props.index === 1
              ? styles.center
              : styles.right
          }
        `}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.description}>{props.description}</p>
        </div>
    </div>
  )
}
