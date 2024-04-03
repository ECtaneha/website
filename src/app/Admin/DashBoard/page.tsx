'use client'
import React, { useState } from 'react';
import PostForm from '../../../components/Announcement/PostForm';
import styles from './dashBoard.module.scss'
import Link from 'next/link';
import AnnouncementList from '@/components/Announcement/AnnouncementList';

export default function Page() {
  const [mode, setMode] = useState<string>('postForm');
  return (
    <div>
      <h1 className={styles.h1}>お知らせ管理画面</h1>
      <div className={styles.selectMenu}>
      <span
          className={`
            ${styles.label}
            ${mode === 'postForm' && styles.active}
          `}
          onClick={() => setMode('postForm')}
        >
          postForm
        </span>
        <span
          className={`
            ${styles.label}
            ${mode === 'Preview' && styles.active}
          `}
          onClick={() => setMode('Preview')}
        >
          Preview
        </span>
        <span className={styles.label}>
          <Link href={'http://localhost:5555/'}>searchForm</Link>
        </span>
      </div>
      {mode === 'postForm'
        ? <PostForm />
        : <AnnouncementList />
      }
    </div>
  );
};