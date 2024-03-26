'use client'
import globalStyles from '../page.module.scss'
import styles from './page.module.scss'
import Link from 'next/link'
import links from '../../static/links.json'
import { useState } from 'react';
import Image from 'next/image'
import datas from '../../static/links.json'
import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb'

export default function Page() {
  const [activeClass, setActiveClass] = useState<string>('支持金物類');

  return (
    <div className={globalStyles.contentsWrapper}>
      <div className={styles.h1Container}>
        <h1 className={styles.h1}>取扱品目</h1>
      </div>
      <div className={styles.handleContainer}>
        <BreadCrumb
          parentPath='トップ'
          childPath='取扱品目'
        />
        <div className={styles.linksContainer}>
          <div className={styles.contentsContainer}>
            <div>
              <h2 className={styles.h2}>{activeClass}</h2>
              <div className={styles.groupDescriptionWrapper}>
                <h3>小分類</h3>
                <div className={styles.groupDescription}>
                  <p className={styles.groupDesc}>説明文</p>
                  <Image
                    className={styles.groupImage}
                    width={300}
                    height={200}
                    src=''
                    alt=''
                  />
                </div>
              </div>
              <div className={styles.groupDescriptionWrapper}>
                <h3>小分類</h3>
                <div className={styles.groupDescription}>
                  <p className={styles.groupDesc}>説明文</p>
                  <p className={styles.groupImage}>画像</p>
                </div>
              </div>
              <h2
                className={`
                  ${styles.h2}
                  ${styles.tradingCompany}
                `}
              >
                取引業者一覧
              </h2>
              {datas.map((data: any, key: number) => (
                activeClass === data.name &&
                  <ul
                    key={key}
                    className={styles.companyUl}
                  >
                    {data.links.map((company: any, subKey: number) => (
                      <li
                        key={subKey}
                        className={styles.companyLi}
                      >
                        <Link
                          className={styles.companyLink}
                          href={company.url}
                        >
                          {company.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}