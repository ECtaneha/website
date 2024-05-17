'use client'
import React from 'react'
import styles from './footer.module.scss'
import { SiteMap } from '@/components/SiteMap/SiteMap';
import Link from 'next/link';

export const Footer = () => {

  const d = new Date();
  const now = d.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.informationWrapper}>
        <img
          className={styles.logo}
          src='/images/header/logo-taishin.png'
          alt='logo'
        />
        <div className={styles.information}>
          <div className={styles.informationAddress}>
            <p>〒770-0051</p>
            <div className={styles.address}>
              <span>徳島県徳島市</span>
              <span>北島田町3-2-4</span>
            </div>
            <div className={styles.tel}>
              <span>TEL：088-632-6565</span>
              <span>FAX：088-632-7737</span>
            </div>
          </div>
          <img
            className={styles.nintei}
            src='/images/footer/nintei_logo.jpg'
            alt='経済産業省認定マーク'
          />
        </div>
      </div>
      <SiteMap />
      <small className={styles.small}>©Taishin Co.,Ltd. {now} since1978</small>
      <Link
        className={styles.admin}
        href='https://website-3x62o1lop-ectanehas-projects.vercel.app/Admin/DashBoard'
      />
    </footer>
  )
}
