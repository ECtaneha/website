import React from 'react'
import styles from './siteMap.module.scss'
import nintei from '/public/images/footer/nintei_logo.jpg'
import logo from '/public/images/header/logo-taishin.png'
import Image from 'next/image';
import Link from 'next/link';
import { SNS } from '../SNS/SNS';

export const SiteMap = () => {
  return (
    <div className={styles.informationContainer}>
      <div className={styles.informationWrapper}>
        <div className={styles.informationWrapperLeft}>
            <div>
              <div className={styles.logo}>
                <Image src={logo} width={250} height={30} alt='logo'/>
              </div>
              <div className={styles.sns}>
                <SNS />
                <Link
                  className={styles.mediaPolicy}
                  href=''
                ><small>メディアポリシー</small></Link>
              </div>
            </div>
        </div>
        <div className={styles.informationWrapperRight}>
          <div className={styles.information}>
            <p>〒770-0051</p>
            <p>徳島県徳島市北島田町3-2-4</p>
            <p>TEL：088-632-6565</p>
            <p>FAX：088-632-7737</p>
          </div>
          <div className={styles.ninteiWrapper}>
            <Image
              className={styles.nintei}
              src={nintei}
              width={40}
              height={40}
              alt='経済産業省認定マーク'
            />
          </div>
        </div>
      </div>
    </div>  )
}
