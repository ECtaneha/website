import React from 'react'
import globalStyles from '../../app/page.module.scss'
import styles from './handleItems.module.scss'
import { Item } from './Item'
import Link from 'next/link'


export const HandleItems = () => {
  return (
    <article className={`
      ${globalStyles.contentsWrapper}
      ${styles.articleContainer}
    `}>
      <h2 className={globalStyles.h2}>
        <div className={globalStyles.h2Wrapper}>
          <p>取扱品目</p>
          <span>handle items</span>
        </div>
      </h2>
      <div className={styles.handleItemsContainer}>
        {datas.map((data, key) =>
          <Link
            key={key}
            className={styles.link}
            href=""
            title={data.title}
          >
            <Item
              title={data.title}
              description={data.description}
              src={data.src}
              width={data.width}
              height={data.height}
              alt={data.alt}
            />
          </Link>
        )}
      </div>
      <button className={styles.list}>
        <Link
          href=""
          title={`list`}
        >
          一覧はこちら
        </Link>
      </button>
    </article>
  )
}

const width = 150;
const height = 30;

const datas = [
  {
    'title': '農業/土木',
    'description': '農業　土木　緑化　工業ゴム',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': '水処理系',
    'description': '上水系水処理　ポンプ　水位制御',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': '水道管',
    'description': '上水道本管　給水装置',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': '塩ビ管',
    'description': '塩ビ管',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': '鋼・ステンレス鋼管',
    'description': '鋼管　ステンレス鋼管',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': '銅・鉛・樹脂管/断熱材',
    'description': '銅管　鉛管　樹脂管　断熱材',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': '空調',
    'description': '空調　換気　電機',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': '消火',
    'description': '消火　フレキ',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': 'ガス計器類',
    'description': 'ガス　計器　標示',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': '水栓',
    'description': 'バルブ　水栓',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': '排水金物/枡/蓋',
    'description': '排水金物　枡　蓋',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': '機器',
    'description': '機器',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': '排水処理系',
    'description': '排水系水処理　浄化槽　便槽　ブロワー',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': '支持金物系',
    'description': '支持金物　ファスニング　溶剤',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
  {
    'title': '工具類',
    'description': '工具',
    'src': '/src/elements/oroshi.jpg',
    'width': width,
    'height': height,
    'alt': 'alt'
  },
]
