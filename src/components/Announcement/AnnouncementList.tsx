'use client'
import { useEffect, useState } from 'react';
import { Announcement } from '@prisma/client';
import globalStyles from '../../app/page.module.scss'
import styles from './announcement.module.scss'

export default function AnnouncementList() {
  const [announce, setAnnounce] = useState<Announcement[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState('すべて');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/getData');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Announcement[] = await res.json();
        setAnnounce(data);

        const uniqueTags = [...new Set(data.map(item => item.tag || ''))];
        setTags(['すべて', ...uniqueTags]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const filteredAnnounce = selectedTag === 'すべて'
    ? announce
    : announce?.filter((item: any) => item.tag === selectedTag || item.tag === null);

  return (
    <div className={`
      ${globalStyles.contentsWrapper}
      ${styles.announcementContainer}
    `}>
      <div className={styles.announcementWrapper}>
        <h2 className={globalStyles.h2}>
          <div className={globalStyles.h2Wrapper}>
            <p>お知らせ</p>
            <span>announcement</span>
          </div>
        </h2>
        <div className={styles.tagWrapper}>
          {tags.map((tag) => (
            <button
              key={tag}
              className={styles.announcementSelectTag}
              onClick={() => setSelectedTag(tag)}
              style={{
                backgroundColor: selectedTag === tag ? '#71cdff' : '',
                color: selectedTag === tag ? 'white' : '',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
        <ul>
          {filteredAnnounce &&
            filteredAnnounce.map((item: any) =>
              item.publication === 'true'
                ? (
                  <li
                    key={item.id}
                    className={styles.announcementLi}
                  >
                    <div className={styles.announcementHeader}>
                      <p className={styles.announcementDate}>
                        {new Date(item.createdDate).toISOString().split('T')[0]}
                      </p>
                      <p className={styles.announcementTag}>{item.tag || 'No tag'}</p>
                    </div>
                    <div className={styles.announcementContentWrapper}>
                      <p className={styles.announcementTitle}>{item.title}</p>
                      <p className={styles.announcementContent}>{item.content}</p>
                    </div>
                  </li>
                )
                : null
            )}
        </ul>
      </div>
    </div>
  );
};
