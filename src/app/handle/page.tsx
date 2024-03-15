'use client'
import globalStyles from '../page.module.scss'
import styles from './page.module.scss'
import Link from 'next/link'
import links from '../../static/links.json'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from 'react';
import datas from '../../static/links.json'

export default function Page() {
  const [activeClass, setActiveClass] = useState<string>('一覧');

  return (
    <div className={globalStyles.contentsContainer}>
      <div className={styles.handleContainer}>
        <h1 className={styles.h1}>取扱品目</h1>
        <div className={styles.linksContainer}>
          <div className={styles.linksWrapper}>
            {links.map((link, key) => (
              <button
                key={key}
                className={styles.a}
                onClick={() => setActiveClass(link.name)}
              >
                <PlayArrowIcon className={styles.itemArrow}/>
                {link.name}
              </button>
            ))}
            <button
              className={styles.a}
              onClick={() => setActiveClass('一覧')}
            >
              <PlayArrowIcon className={styles.itemArrow}/>
              一覧
            </button>
          </div>
          <div className={styles.contentsContainer}>
            {activeClass === '一覧'
              ? <div>
                  <h2 className={styles.h2}>取扱業者一覧</h2>
                  <div className={styles.allClass}>
                      {datas.map((data, key) => (
                        <ul
                          key={key}
                          className={styles.companyUl}
                        >
                          <li>{data.name}</li>
                          <hr />
                          {data.links.map((company, subKey) => (
                            <li key={subKey}>
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
              : <div>
                  <h2 className={styles.h2}>{activeClass}</h2>
                  <div className={styles.groupDescriptionWrapper}>
                    <h3>小分類</h3>
                    <div className={styles.groupDescription}>
                      <p className={styles.groupDesc}>説明文</p>
                      <p className={styles.groupImage}>画像</p>
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
                          <li key={subKey}>
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
            }
          </div>
        </div>
      </div>
    </div>
  )
}