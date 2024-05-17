'use client'
import React, { useState } from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import EmailIcon from '@mui/icons-material/Email';
import { Hamburger } from '@/components/Hamburger/Hamburger'
import { Language } from '@/components/Language/Language'
import { SNS } from "@/components/SNS/SNS"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const links =[
  {
    title: '会社概要',
    url: '/information',
  },
  {
    title: '採用情報',
    url: '/recruit',
  },
  {
    title: '取扱品目',
    url: '/handle/allClass',
  },
  {
    title: 'お問い合わせ',
    url: '/contact',
  },
]

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
        <h1
          id="logo"
          className={styles.h1}
        >
          <img
            className={styles.image}
            src='/images/header/logo-taishin.png'
            alt='logo'
            onClick={() => setIsOpenState(false)}
          />
        </h1>
        <p className={styles.catch}>人々の生活を支え続けて
          <span className={styles.year}>{year}年</span>
        </p>
      </Link>
      <div className={styles.space}></div>

      <div className={styles.linksContainer}>
        <div className={styles.linksWrapper}>
          {links.map((link, key) => (
            <Link
              className={styles.link}
              key={key}
              href={link.url}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

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

