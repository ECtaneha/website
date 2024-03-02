import React from 'react'
import globalStyles from '../../app/page.module.scss'
import styles from './handleItems.module.scss'
import { Item } from './Item'
import Link from 'next/link'
import datas from '../../static/links.json'

const width = 150;
const height = 30;

export const HandleItems = () => {
  return (
    <article className={globalStyles.contentsWrapper}>
      <div className={styles.articleContainer}>
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
              as={`/handle/${data.name}`}
              href={{ pathname: `/handle/${data.name}`, query: data.name}}
            >
              <Item
                name={data.name}
                class={data.class}
                src={data.src}
                width={width}
                height={height}
                alt={data.name}
              />
            </Link>
          )}
        </div>
        <button className={styles.list}>
          <Link
            href="/handle"
            as={`/handle/list`}
            // href={{ pathname: `/handle/list`, query: '一覧'}}
          >
            一覧はこちら
          </Link>
        </button>
      </div>
    </article>
  )
}
