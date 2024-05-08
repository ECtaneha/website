'use client'
import globalStyles from '@/app/page.module.scss'
import styles from '../page.module.scss'
import Link from 'next/link'
import datas from '@/static/links.json'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { SetCategory } from './SetCategory';

export default function Page() {
  const [category, setCategory] = useState<string>('一覧');
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <div className={globalStyles.contentsWrapper}>
      <div className={styles.h1Container}>
        <h1 className={styles.h1}>取扱品目別<br />メーカーリンク一覧</h1>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.contentsContainer}>
          <div>
            <div className={styles.selectBox}>
              <InputLabel id="">カテゴリー</InputLabel>
              <Select
                labelId=""
                id=""
                value={category}
                label="カテゴリー"
                fullWidth
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value='一覧'>一覧</MenuItem>
                {datas.map((data)=>
                  <MenuItem
                    key={data.id}
                    value={data.id}
                  >
                    {data.name}
                  </MenuItem>
                )}
              </Select>
            </div>

            <div className={styles.allClass}>
              {isBrowser && window.innerWidth <= 768
                ? category === '一覧'
                  ? datas.map((data, key: number) => (
                    <SetCategory key={key} {...data} />
                  ))
                  : datas.map((data, key: number) => (
                    data.id === category && <SetCategory key={key} {...data} />
                  ))
                : datas.map((data, key: number) => (
                    <SetCategory key={key} {...data} />
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}