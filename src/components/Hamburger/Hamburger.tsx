import React from 'react'
import styles from './hamburger.module.scss'
import Link from 'next/link'

export const Hamburger = () => {
  return (
    <div>
      <input type="checkbox" className={styles.menuBtn} id="menu-btn" />
      <label htmlFor="menu-btn" className={styles.menuIcon}>
        <span className={styles.navIcon}></span>
      </label>
      <ul className={styles.menu}>
        <li><Link href="/information">会社概要</Link></li>
        <li><Link href="/recruit">採用情報</Link></li>
        <li><Link href="/handle">取扱品目</Link></li>
        <li><Link href="/contact">お問い合わせ</Link></li>
      </ul>
    </div>
  )
}
