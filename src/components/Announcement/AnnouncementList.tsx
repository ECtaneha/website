'use client'
import { useEffect, useState } from 'react';
import { announcement } from '@prisma/client';
import globalStyles from '@/app/page.module.scss'
import styles from './announcement.module.scss'
import { Announce } from './Announce';
import PageNation from '@/components/PageNation/PageNation';

export default function AnnouncementList() {
  const [announce, setAnnounce] = useState<announcement[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('すべて');
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  const [pageSize] = useState<number>(5);

  useEffect(() => {
    console.log(1);

    const fetchData = async () => {
      try {
        const response = await fetch('/api/getData');
        console.log(response);


        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: announcement[] = await response.json();
        setAnnounce(data);

        const uniqueTags = [...new Set(data.map(item => item.tag || ''))];
        setTags(['すべて', ...uniqueTags]);
        setMaxPage(Math.ceil(data.length / pageSize));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [pageSize]);

  const filteredAnnounce = selectedTag === 'すべて'
    ? announce
    : announce?.filter((item: any) => item.tag === selectedTag || item.tag === null);

  const sortedAnnounce = filteredAnnounce.slice().sort((a, b) => {
    if (a.createddate < b.createddate) {
      return 1;
    }
    if (a.createddate > b.createddate) {
      return -1;
    }
    return 0;
  });

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedAnnounce = sortedAnnounce.slice(startIndex, endIndex);

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
              onClick={() => (
                setSelectedTag(tag),
                setPage(1)
              )}
              style={{
                backgroundColor: selectedTag === tag ? '#71cdff' : '',
                color: selectedTag === tag ? 'white' : '',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
        <ul className={styles.announcementUl}>
          {displayedAnnounce.map((item: any) =>
            item.publication === 'true' &&
              <Announce
                key={item.id}
                item={item}
              />
          )}
        </ul>
        <PageNation
          page={page}
          setPage={setPage}
          maxPage={sortedAnnounce.length}
        />
      </div>
    </div>
  );
};
