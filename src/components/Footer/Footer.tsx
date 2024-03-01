import React from 'react'
import styles from './footer.module.scss'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Link from 'next/link';

const links =[
  {
    title: '会社概要',
    url: '',
  },
  {
    title: '採用情報',
    url: '',
  },
  {
    title: '取扱品目',
    url: '',
  },
  {
    title: 'お問い合わせ',
    url: '',
  },
  {
    title: 'プライバシーポリシー',
    url: '',
  },
]

export const Footer = (props: number) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksContainer}>
        <div className={styles.linksWrapper}>
          {links.map((link, key) => (
            <Link
              className={styles.link}
              key={key}
              href=''
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className={styles.arrowContainer}>
          <KeyboardDoubleArrowUpIcon className={styles.arrow}/>
        </div>
      </div>
      <small className={styles.small}>©Taishin Co.,Ltd. {props.now} since1978</small>
    </footer>
  )
}
