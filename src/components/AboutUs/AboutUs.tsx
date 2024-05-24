import React from 'react'
import globalStyles from '/src/app/page.module.scss'
import styles from './aboutUs.module.scss'
import { Card } from './Card'
import Link from 'next/link'

export const AboutUs = () => {
  return (
    <article className={globalStyles.contentsWrapper}>
      <div className={styles.aboutUsContainer}>
        <h2 className={globalStyles.h2}>
          <div className={globalStyles.h2Wrapper}>
            <p>タイシンについて</p>
            <span>about us</span>
          </div>
        </h2>
        <div className={styles.cardContainer}>
          {datas.map((data, key) =>
            <Card
              key={key}
              title={data.title}
              description={data.description}
              src={data.src}
              alt={data.alt}
            />
          )}
        </div>
        <Link
          className={styles.aboutAsButton}
          href='/information'
        >
          会社概要
        </Link>
      </div>
    </article>
  )
}



const datas = [
  {
    'title': '設立',
    'description': '昭和53年2月17日',
    'src': '/images/aboutUs/founding.png',
    'alt': '設立'
  },
  {
    'title': '売上高',
    'description': '29億5千万円\n（令和4年度）',
    'src': '/images/aboutUs/sales.png',
    'alt': '売上高'
  },
  {
    'title': '従業員数',
    'description': '35名',
    'src': '/images/aboutUs/employees.png',
    'alt': '従業員数'
  },
  {
    'title': '取引社数',
    'description': '500社',
    'src': '/images/aboutUs/tradingCompanies.png',
    'alt': '取引社数'
  },
]
