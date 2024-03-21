'use client'
import React, { useState } from 'react'
import styles from './footer.module.scss'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Link from 'next/link';
import { SiteMap } from '../SiteMap/SiteMap';


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
    url: '/handle',
  },
  {
    title: 'お問い合わせ',
    url: '/contact',
  },
  {
    title: 'プライバシーポリシー',
    url: '',
  },
]

export const Footer = () => {
  const [arrowSwitch, setArrowSwitch] = useState<boolean>(false);

  const d = new Date();
  const now = d.getFullYear();

  return (
    <footer className={`
      ${styles.footer}
      ${arrowSwitch && styles.openFooter}
    `}>
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
          <input
            id="switch"
            className={styles.arrowSwitch}
            type="checkbox"
          />
          <label
            htmlFor='switch'
            className={styles.arrowContainer}
            onClick={() => setArrowSwitch(!arrowSwitch)}
          >
            <KeyboardDoubleArrowUpIcon
              className={
                arrowSwitch
                  ? styles.arrowReverse
                  : styles.arrow
              }
            />
          </label>
        </div>
        <SiteMap />
        <small className={styles.small}>©Taishin Co.,Ltd. {now} since1978</small>
    </footer>
  )
}
