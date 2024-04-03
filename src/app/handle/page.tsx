'use client'
import globalStyles from '../page.module.scss'
import styles from './page.module.scss'
import Link from 'next/link'
import { useState } from 'react';
import Image from 'next/image'
import datas from '../../static/links.json'
import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb'
import image1 from '/public/images/handleImages/class1.png'
import image2 from '/public/images/handleImages/class2.png'
import image3 from '/public/images/handleImages/class3.png'
import image4 from '/public/images/handleImages/class4.png'

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
                {/* <h3>小分類</h3> */}
                <div className={styles.groupDescription}>
                  {/* <p className={styles.groupDesc}>説明文</p> */}
                  <Image
                    className={styles.groupImage}
                    width={300}
                    height={200}
                    src={image1}
                    alt='image1'
                  />
                  <Image
                    className={styles.groupImage}
                    width={300}
                    height={200}
                    src={image2}
                    alt='image2'
                  />
                  <Image
                    className={styles.groupImage}
                    width={300}
                    height={200}
                    src={image3}
                    alt='image3'
                  />
                  <Image
                    className={styles.groupImage}
                    width={300}
                    height={200}
                    src={image4}
                    alt='image4'
                  />
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