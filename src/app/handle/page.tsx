'use client'
import { useSearchParams } from 'next/navigation'
import globalStyles from '../page.module.scss'
import styles from './page.module.scss'
import datas from '../../static/links.json'
import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb'
import { HandleItem } from '@/components/HandleItems/HandleItem'
import Link from 'next/link'

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

          <hr />

          <div className={styles.linksWrapper}>
            {datas.map((data) => (
              <Link
                key={data.id}
                className={styles.link}
                href={{
                  pathname: '/handle',
                  query: { id: data.id, name: data.name }
                }}
              >
                {data.class.map((array, key)=> (
                  <span
                    key={key}
                    className={styles.classArray}>
                    {array}
                  </span>
                ))}
              </Link>
            ))}
          </div>
        </div>
      </div>
  )
}

