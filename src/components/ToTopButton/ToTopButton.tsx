'use client'
import React from 'react'
import styles from './toTopButton.module.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from 'next/link';

export const ToTopButton = () => {
  return (
    <Link className={styles.toTopButton} href='#header'>
      <KeyboardArrowUpIcon className={styles.upArrow}/>
    </Link>
  )
}
