'use client'
import React, { useState } from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import { SNS } from "../SNS/SNS"
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';
import logo from '/public/images/header/logo-taishin.png'
import { Hamburger } from '../Hamburger/Hamburger'
import { Language } from '../Language/Language'

export const Header = () => {
  const [isOpenState, setIsOpenState] = useState<boolean>(false);

  const d = new Date();
  const now = d.getFullYear();
  const year = now - 1978;

  return (
    <header
      id='header'
      className={styles.header}
    >
      <Link
        className={styles.logo}
        href='/'
      >
        <h1 id="logo" className={styles.h1}>
            <Image
              src={logo}
              width={256}
              height={31}
              alt='logo'
              onClick={() => setIsOpenState(false)}
            />
        </h1>
        <p className={styles.catch}>人々の生活を支え続けて
          <span className={styles.year}>{year}年</span>
        </p>
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
      <Link
        className={styles.toTopSP}
        href='#header'
      ></Link>
      <Hamburger
        isOpenState={isOpenState}
        setIsOpenState={setIsOpenState}
      />
    </header>
  )
}

