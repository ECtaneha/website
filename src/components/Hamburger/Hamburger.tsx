import React from 'react'
import styles from './hamburger.module.scss'
import Link from 'next/link'
import { SiteMap } from '@/components/SiteMap/SiteMap'

type IsOpenState = {
  isOpenState: any;
  setIsOpenState: (arg0: boolean) => void;
}

export const Hamburger = (props: IsOpenState) => {
  return (
    <div className={styles.hamburgerContainer}>
      <input type="checkbox" className={styles.menuBtn} id="menu-btn" />
      <label
        className={styles.menuIcon}
        htmlFor="menu-btn"
        onClick={() => props.setIsOpenState(!props.isOpenState)}
      >
        <span className={`${styles.top} ${props.isOpenState && styles.Open}`}></span>
        <span className={`${styles.navIcon} ${props.isOpenState && styles.navIconOpen}`}></span>
        <span className={`${styles.bottom} ${props.isOpenState && styles.Open}`}></span>
      </label>
      <div className={`
          ${styles.menuWrapper}
          ${props.isOpenState && styles.menuOpen}
        `}>
        <ul className={`
          ${styles.menu}
          ${props.isOpenState && styles.menuOpen}
        `}>
          {data.map((value, key) => (
            <li
              key={key}
              className={`${props.isOpenState && styles.liOpen}`}
            >
              <Link
                className={`
                  ${styles.link}
                  ${props.isOpenState && styles.liOpen}
                `}
                href={value.url}
                onClick={() => props.setIsOpenState(!props.isOpenState)}
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