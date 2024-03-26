'use client'
import React from 'react'
import globalStyles from '../../app/page.module.scss'
import styles from './handleItems.module.scss'
import { Item } from './Item'
import Link from 'next/link'
import datas from '../../static/links.json'

const width = 80;
const height = 80;

type Link = {
  name: string;
  url: string;
};

type ElementData = {
  id: string;
  name: string;
  class: string[];
  description: string;
  src: string;
  links: Link[];
};

const query: ElementData[] = datas;

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
              href={`handle/${data.id}`}
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
          <Link href='handle/allClass'>
            一覧はこちら
          </Link>
        </button>
      </div>
    </article>
  )
}
