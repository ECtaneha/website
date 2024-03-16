import React from 'react'
import styles from './news.module.scss'

type article = {
  createTime: string,
  tag: string,
  title: string,
  text: string,
}

export const NewsArticle = (props: article) => {
  return (
    <div>
      <li className={styles.li}>
        <div className={styles.head}>
          <p className={styles.time}>{props.createTime}</p>
          <p className={styles.tag}>{props.tag}</p>
        </div>
        <a
          className={styles.a}
          href='#'>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.text}>{props.text}</p>
        </a>
      </li>
    </div>
  )
}
