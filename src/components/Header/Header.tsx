import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import { SNS } from "../SNS/SNS"
import { Language } from '../Language/Language'
import EmailIcon from '@mui/icons-material/Email';

export const Header = (props: number) => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <h1 id="logo" className={styles.h1}>
            Taishin
        </h1>
        {/* <p className={styles.catch}>人々の生活を支え続けて
          <span className={styles.year}>{props.year}</span>年
        </p> */}
      </Link>
      <div className={styles.space}></div>
      <SNS />
      <Language />
      <Link
        className={styles.linkContact}
        href='/contact'
      >
        <span>お問い合わせ</span>
        <EmailIcon
          className={styles.iconContact}
        />
      </Link>
    </header>
  )
}

