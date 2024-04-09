'use client'
import { useSearchParams } from 'next/navigation'
import globalStyles from '../page.module.scss'
import styles from './page.module.scss'
import datas from '../../static/links.json'
import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb'
import { HandleItem } from '@/components/HandleItems/HandleItem'

export default function Page() {
  const searchParams = useSearchParams();
  const classID = searchParams.get('id');
  const className = searchParams.get('name');
  const classData = datas.find(data => data.id === classID);

  return (
      <div className={globalStyles.contentsWrapper}>
        <div className={styles.h1Container}>
          <h1 className={styles.h1}>取扱品目</h1>
        </div>
        <div className={styles.handleContainer}>
          <BreadCrumb
            parentPath='トップ'
            childPath='取扱品目'
          />
          <div className={styles.linksContainer}>
            <div className={styles.contentsContainer}>
              {classID !== null &&
                <div>
                  <HandleItem
                    datas={datas}
                    className={className}
                    classData={classData}
                  />
                </div>
              }
            </div>
          </div>
        </div>
      </div>
  )
}

