'use client'
import React, { useEffect, useState } from 'react'
import styles from './hamburger.module.scss'
import Link from 'next/link'
import { SiteMap } from '../SiteMap/SiteMap'

export const Hamburger = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpenState);
  console.log('isOpenState:'+ props.isOpenState);

  useEffect(() => {
    setIsOpen(props.isOpenState);
  }, [props.isOpenState]);

  return (
    <div className={styles.hamburgerContainer}>
      <input type="checkbox" className={styles.menuBtn} id="menu-btn" />
      <label
        className={styles.menuIcon}
        htmlFor="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${styles.top} ${isOpen && styles.Open}`}></span>
        <span className={`${styles.navIcon} ${isOpen && styles.navIconOpen}`}></span>
        <span className={`${styles.bottom} ${isOpen && styles.Open}`}></span>
      </label>
      <div className={`
          ${styles.menuWrapper}
          ${isOpen && styles.menuOpen}
        `}>
        <ul className={`
          ${styles.menu}
          ${isOpen && styles.menuOpen}
        `}>
          {data.map((value, key) => (
            <li
              key={key}
              className={`${isOpen && styles.liOpen}`}
            >
              <Link
                className={`
                  ${styles.link}
                  ${isOpen && styles.liOpen}
                `}
                href={value.url}
                onClick={() => setIsOpen(!isOpen)}
              >
                {value.title}
              </Link>
            </li>
          ))}
          </ul>
        <SiteMap />
      </div>
    </div>
  )
}

const data = [
  {
    'title': '会社概要',
    'url': '/information'
  },  {
    'title': '採用情報',
    'url': '/recruit'
  },

  {
    'title': '取扱品目',
    'url': '/handle'
  },
  {
    'title': 'お問い合わせ',
    'url': '/contact'
  }
]