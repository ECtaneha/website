'use client'
import React from 'react'
import globalStyles from '@/app/page.module.scss'
import styles from './handleItems.module.scss'
import { Item } from './Item'
import Link from 'next/link'
import datas from '@/static/links.json'

const width = 80;
const height = 80;

export const HandleItems = () => {
  return (
    <article className={globalStyles.contentsWrapper}>
      <div className={styles.articleContainer}>
        <h2 className={globalStyles.h2}>
          <div className={globalStyles.h2Wrapper}>
            <p>取扱品目</p>
            <span>取扱メーカーリンク</span>
          </div>
        </h2>
        <div className={styles.handleItemsContainer}>
          {datas.map((data, key) =>
            <Link
              key={key}
              className={styles.link}
              href={{
                pathname: `/handle`,
                query: { id: data.id, name: data.name }
              }}
            >
              <Item
                name={data.name}
                class={data.class}
                thumbnail={data.thumbnail}
                width={width}
                height={height}
                alt={data.name}
              />
            </Link>
          )}
        </div>
        <Link
          className={styles.list}
          href='handle/allClass'
        >
          <p>一覧はこちら</p>
        </Link>
      </div>
    </article>
  )
}
