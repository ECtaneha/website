'use client'
import React, { useState } from 'react'
import styles from './navMenu.module.css'

const menu = [
  {'title': '会社概要', 'url': ''},
  {'title': '取扱品目', 'url': ''},
  {'title': '取引先',  'url': ''},
  {'title': '採用', 'url': ''},
  {'title': 'ひとりごと', 'url': ''},
  {'title': 'お問い合わせ', 'url': ''},
]

export const NavMenu = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const handleIsExpand = () => {
    setIsExpand(!isExpand)
  };

  return (
    <div className={styles.wrap}>
      <span className={styles.radialToggle} onClick={handleIsExpand}>menu
      </span>
      <div
        className={
          `${styles.radialmenu}
          ${isExpand
            ? styles.expand
            : styles.unExpand
          }`
        }
      >
        {/* {menu.map((item, index) => (
          <a href={item.url} key={index}>
            <span className="">
              {item.title}
            </span>
          </a>
        ))} */}
        <div className={styles.a_cover}>
          <div>
            <a href="">会社概要</a>
            <a href="">採用</a>
          </div>
        </div>
        <div className={styles.a_cover}>
          <div>
            <a href="">取扱品目</a>
            <a href="">ひとりごと</a>
          </div>
        </div>
        <div className={styles.a_cover}>
          <div>
            <a href="">取引先</a>
            <a href="">お問い合わせ</a>
          </div>
        </div>
      </div>
    </div>
  )
}
