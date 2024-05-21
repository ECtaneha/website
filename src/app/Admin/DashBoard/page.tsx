'use client'
import React, { useState } from 'react';
import PostForm from '@/components/Announcement/PostForm';
import styles from './dashBoard.module.scss'
import Link from 'next/link';
import { LoginForm } from '@/components/Announcement/LoginForm';
import { EditForm } from '@/components/Announcement/EditForm';

export default function Page() {
  const [userID, setUserID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [mode, setMode] = useState<string>('postForm');

  const database = process.env.NEXT_PUBLIC_VERCEL_DATABASE;
  const url = process.env.NEXT_PUBLIC_PRODUCTION_URL;

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
            <Link href={`${url}`}>
              <h1 className={styles.h1}>お知らせ管理画面<br/></h1>
            </Link>
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
                  ${mode === 'EditForm' && styles.active}
                `}
                onClick={() => setMode('EditForm')}
              >
                EditForm
              </span>
              <span className={styles.label}>
                <Link href={`${database}`}>DataBase</Link>
              </span>
            </div>
            {mode === 'postForm'
              ? <PostForm />
              : <EditForm />
            }
          </>
        )
      }
    </div>
  );
};