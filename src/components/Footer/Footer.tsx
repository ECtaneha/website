'use client'
import React, { useState } from 'react'
import styles from './footer.module.scss'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Link from 'next/link';
import Image from 'next/image';
import { SNS } from '../SNS/SNS';
import nintei from '/public/images/nintei_logo.jpg'
import logo from '/public/images/logo-taishin.png'

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
        <div className={styles.informationContainer}>
          <div className={styles.informationWrapper}>
            <div className={styles.informationWrapperLeft}>
                <div>
                  <div className={styles.logo}>
                    <Image src={logo} width={250} height={30} alt='logo'/>
                  </div>
                  <div className={styles.sns}>
                    <SNS />
                    <Link href=''><small>ソーシャルメディアポリシー</small></Link>
                  </div>
                </div>
            </div>
            <div className={styles.informationWrapperRight}>
              <div className={styles.information}>
                <p>〒770-0051</p>
                <p>徳島県徳島市北島田町3-2-4</p>
                <p>TEL：088-632-6565</p>
                <p>FAX：088-632-7737</p>
              </div>
              <div className={styles.ninteiWrapper}>
                <Image
                  className={styles.nintei}
                  src={nintei}
                  width={40}
                  height={40}
                  alt='経済産業省認定マーク'
                />
              </div>
            </div>
          </div>
        </div>

        <small className={styles.small}>©Taishin Co.,Ltd. {now} since1978</small>
    </footer>
  )
}
