'use client'
import React from 'react'
import styles from './footer.module.scss'
import { SiteMap } from '@/components/SiteMap/SiteMap';

export const Footer = () => {

  const d = new Date();
  const now = d.getFullYear();

  return (
    <footer className={styles.footer}>
      <SiteMap />
      <small className={styles.small}>©Taishin Co.,Ltd. {now} since1978</small>
    </footer>
  )
}
