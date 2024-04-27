'use client'
import React, { useState } from 'react'
import styles from './announcement.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { RenderParagraphs } from '@/lib/RenderParagraphs';

export const Announce = (props: any) => {
  const [isOpenAnnounce, setIsOpenAnnounce] = useState<boolean>(false);

  return (
    <li
      className={styles.announcementLi}
      onClick={() => setIsOpenAnnounce(!isOpenAnnounce)}
    >
      <div className={styles.announcementHeader}>
        <p className={styles.announcementDate}>
          {new Date(props.item.createddate).toISOString().split('T')[0]}
        </p>
        <p className={styles.announcementTag}>{props.item.tag || 'No tag'}</p>
      </div>
      <div className={styles.announcementContentWrapper}>
        <p className={styles.announcementTitle}>{props.item.title}</p>
        <div className={`
          ${styles.announcementContent}
          ${isOpenAnnounce && styles.open}
        `}>
          <div>{RenderParagraphs(props.item.content, '\n')}</div>
        </div>
      </div>
      <KeyboardArrowDownIcon className={`
        ${styles.arrow}
        ${isOpenAnnounce && styles.open}
      `}/>
    </li>
  )
}
