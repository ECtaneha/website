import React from 'react'
import styles from './footer.module.scss'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Link from 'next/link';
import Image from 'next/image';
import { SNS } from '../SNS/SNS';
import nintei from '../../static/nintei_logo.jpg'

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
    url: '/handle',
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
                href={link.url}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className={styles.arrowContainer}>
            <KeyboardDoubleArrowUpIcon className={styles.arrow}/>
          </div>
        </div>
        <div className={styles.informationContainer}>
          <div className={styles.informationWrapper}>
            <div className={styles.informationWrapperLeft}>
                <div>
                  <div className={styles.logo}>logo</div>
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

        <small className={styles.small}>©Taishin Co.,Ltd. {props.now} since1978</small>
    </footer>
  )
}
