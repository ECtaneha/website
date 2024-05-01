import React from 'react'
import styles from './siteMap.module.scss'
import Link from 'next/link';
import links from '@/static/links.json'
import information from '@/app/information/information.json'
import recruit from '@/app/recruit/contents.json'
import { SNS } from '@/components/SNS/SNS';

export const SiteMap = () => {
  return (
    <div className={styles.informationContainer}>
      <div className={styles.informationWrapper}>
        <div className={styles.informationWrapperLeft}>
            <img
              className={styles.logo}
              src='/images/header/logo-taishin.png'
              alt='logo'
            />
            <div className={styles.information}>
              <p>〒770-0051</p>
              <p>徳島県徳島市北島田町3-2-4</p>
              <div>
                <span>TEL：088-632-6565</span>
                <span>　FAX：088-632-7737</span>
              </div>
            </div>
            <img
              className={styles.nintei}
              src='/images/footer/nintei_logo.jpg'
              alt='経済産業省認定マーク'
            />
        </div>

        <div className={styles.informationWrapperRight}>
          <div>
            <Link href='/information'>
              <h4>{information[0].linkMenu.h1}</h4>
            </Link>
            {information[0].linkMenu.menu.map((prev, key) => (
              <div key={key}>
                <Link href={{
                  pathname: `information/`,
                  query: { jumpId: `${prev.url}` }
                }}>
                  <p>{`- ${prev.title}`}</p>
                </Link>
              </div>
            ))}
          </div>
          <div>
            <Link href='/recruit'>
            <h4>{recruit[0].h1Greet}</h4>
            </Link>
            {recruit[0].linkMenu.map((prev, key) => (
              <div key={key}>
                <Link href={{
                  pathname: `recruit/`,
                  query: { jumpId: `${prev.url}` }
                }}>
                  <p>{`- ${prev.title}`}</p>
                </Link>
              </div>
            ))}
          </div>
          <div>
            <Link href='/handle/allClass'>
              <h4>取扱品目</h4>
            </Link>
            <div className={styles.informationHandleItems}>
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={{
                    pathname: '/handle',
                    query: { id: link.id, name: link.name }
                  }}
                >
                  <p>
                    -
                    {link.class.map((array, key)=> (
                      <span key={key}>&nbsp;{array}</span>
                    ))}
                  </p>
                </Link>
              ))}
              <Link href='/handle/allClass'><p>- 一覧</p></Link>
            </div>
          </div>
          <div>
            <h4>ポリシー</h4>
            <Link href='/policy/privacy'>
              <p>- プライバシーポリシー</p>
            </Link>
            <Link href='/policy/site'>
              <p>- サイトポリシー</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
