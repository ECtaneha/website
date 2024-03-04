'use client'
import globalStyles from '../page.module.scss'
import styles from './page.module.scss'
import Link from 'next/link'
import links from '../../static/links.json'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from 'react';

export default function Page() {
  const [activeClass, setActiveClass] = useState<string>('一覧');

  return (
    <div className={globalStyles.contentsContainer}>
      <div>
        <h1 className={styles.h1}>取扱品目</h1>
        <div className={styles.linksContainer}>
          {links.map((link, key) => (
            <button
              key={key}
              className={styles.a}
              onClick={() => setActiveClass(link.name)}
            >
              <PlayArrowIcon className={styles.itemArrow}/>
              {link.name}
            </button>
          ))}
          <button
            className={styles.a}
            onClick={() => setActiveClass('一覧')}
          >
            <PlayArrowIcon className={styles.itemArrow}/>
            一覧
          </button>
        </div>
        <div className={styles.contentsContainer}>
            <h2 className={styles.h2}>{activeClass}</h2>
        </div>
      </div>
    </div>
  )
}