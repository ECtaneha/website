'use client'
import { useEffect, useState } from 'react';
import { announcement } from '@prisma/client';
import globalStyles from '../../app/page.module.scss'
import styles from './announcement.module.scss'
import { Announce } from './Announce';

export default function AnnouncementList() {
  const [announce, setAnnounce] = useState<announcement[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState('すべて');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/getData');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data: announcement[] = await res.json();
        setAnnounce(data);
        console.log(data);


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
      <h2 className={globalStyles.h2}>
        <div className={globalStyles.h2Wrapper}>
          <p>お知らせ</p>
          <span>announcement</span>
        </div>
      </h2>
      <div className={styles.announcementWrapper}>
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
                ? <Announce
                    key={item.id}
                    item={item}
                  />
                : null
            )}
        </ul>
      </div>
    </div>
  );
};
