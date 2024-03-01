import React from 'react'
import globalStyles from '../../app/page.module.scss'
import styles from './aboutUs.module.scss'
import { Card } from './Card'

export const AboutUs = () => {
  return (
    <article className={`
      ${globalStyles.contentsWrapper}
      ${styles.aboutUsContainer}
    `}>
      <h2 className={globalStyles.h2}>
        <div className={globalStyles.h2Wrapper}>
          <p>タイシンについて</p>
          <span>about us</span>
        </div>
      </h2>
      <div className={styles.cardWrapper}>
        {datas.map((data, key) =>
          <Card
            key={key}
            title={data.title}
            description={data.description}
            src={data.src}
            width={data.width}
            height={data.height}
            alt={data.alt}
          />
        )}
      </div>
      <button className={styles.aboutAs}>会社概要</button>
    </article>
  )
}

const width = 200;
const height = 200;

const datas = [
  {
    'title': '設立',
    'description': 'description',
    'src': '/src/elements/ピクトグラム-設立.png',
    'width': width,
    'height': height,
    'alt': '設立'
  },
  {
    'title': '売上高',
    'description': 'description',
    'src': '/src/elements/ピクトグラム-売上高.png',
    'width': width,
    'height': height,
    'alt': '売上高'
  },
  {
    'title': '従業員数',
    'description': 'description',
    'src': '/src/elements/ピクトグラム-従業員数.png',
    'width': width,
    'height': height,
    'alt': '従業員数'
  },
  {
    'title': '取引社数',
    'description': 'description',
    'src': '/src/elements/ピクトグラム-握手.png',
    'width': width,
    'height': height,
    'alt': '取引社数'
  },
]
