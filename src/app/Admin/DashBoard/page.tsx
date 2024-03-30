'use client'
import React from 'react';
import PostForm from '../../../components/Announcements/PostForm';
import styles from './dashBoard.module.scss'
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1 className={styles.h1}>お知らせ管理画面</h1>
      <div className={styles.selectMenu}>
        <span className={styles.label}>postForm</span>
        <span className={styles.label}>
          <Link href={'http://localhost:5555/'}>searchForm</Link>
        </span>
      </div>
      <PostForm />
    </div>
  );
};