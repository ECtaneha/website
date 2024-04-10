'use client'
import React, { useState } from 'react';
import PostForm from '../../../components/Announcement/PostForm';
import styles from './dashBoard.module.scss'
import Link from 'next/link';
import AnnouncementList from '@/components/Announcement/AnnouncementList';
import { LoginForm } from '@/components/Announcement/LoginForm';

const url = 'https://vercel.com/ectanehas-projects/website/stores/postgres/store_Zsp9bNRFnpZ9Ns95/data';

export default function Page() {
  const [userID, setUserID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const [mode, setMode] = useState<string>('postForm');
  return (
    <div className={styles.adminContainer}>
      {!isLogin
        ? <LoginForm
            userID={userID}
            password={password}
            setUserID={setUserID}
            setPassword={setPassword}
            setIsLogin={setIsLogin}
          />
        : (
          <>
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
                <Link href={url}>DataBase</Link>
              </span>
            </div>
            {mode === 'postForm'
              ? <PostForm />
              : <AnnouncementList />
            }
          </>
        )
      }
    </div>
  );
};