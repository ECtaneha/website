'use client'
import React from 'react'
import styles from './nav.module.css'
import Link from 'next/link'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const navItems = [
  {
    "titleJp": "トップ",
    "titleEn": "HOME",
    "url": "/",
  },
  {
    "titleJp": "会社概要",
    "titleEn": "COMPANY",
    "url": "/company",
  },
  {
    "titleJp": "取扱品目",
    "titleEn": "ITEM HANDLE",
    "url": "/handle",
  },
  {
    "titleJp": "取引先",
    "titleEn": "SUPPLIERS",
    "url": "/suppliers",
  },
  {
    "titleJp": "採用",
    "titleEn": "RECRUIT",
    "url": "/recruit",
  },
  // {
  //   "titleJp": `かいちょーの\nひとりごと`,
  //   "titleEn": `Chairman's\nMONOLOGUE`,
  //   "url": "/monologue",
  // },
  // {
  //   "titleJp": "猫日記",
  //   "titleEn": "CAT'S DIARY",
  //   "url": "/diary",
  // },
  {
    "titleJp": "お問い合わせ",
    "titleEn": "CONTACT",
    "url": "/contact",
  },
]

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <KeyboardDoubleArrowRightIcon className={styles.arrow}/>

      <ul className={styles.ul}>
        {navItems.map((item, key) =>
          <Link className={styles.link} href={{pathname: item.url}} key={key}>
            <div
              className={
                `${styles.div}
                ${item.titleJp === 'かいちょーの\nひとりごと'
                  ? styles.line2
                  : styles.line1
                }`
              }
            >
              <li className={styles.li_jp}>
                {item.titleJp}
              </li>
              <li className={styles.li_en}>
                {/* {item.titleEn} */}
                {item.titleEn.split('\n').map((t, key) => (
                  t !== '' ? <div key={key}>{t}</div> : <br key={key}/>
                ))}
              </li>
            </div>
          </Link>
      )}
      </ul>
    </nav>
  )
}
