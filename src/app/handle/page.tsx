'use client'
import { useSearchParams } from 'next/navigation'
import globalStyles from '../page.module.scss'
import styles from './page.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import datas from '../../static/links.json'
import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb'

export default function Page() {
  const searchParams = useSearchParams();
  const classID = searchParams.get('id');
  const className = searchParams.get('name');

  // classID に対応するデータを検索
  const classData = datas.find(data => data.id === classID);
  console.log(classData);

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
            <div>
              <h2 className={styles.h2}>{className}</h2>
              <div className={styles.groupDescriptionWrapper}>
                <div className={styles.groupDescription}>
                  {classData && classData.src.map((url: string, index: number) => {
                    return (
                      <Image
                        key={index}
                        className={styles.groupImage}
                        width={300}
                        height={200}
                        src={url}
                        alt={`image${index + 1}`}
                      />
                    );
                  })}
                </div>
              </div>
              <h2
                className={`
                  ${styles.h2}
                  ${styles.tradingCompany}
                `}
              >
                取引業者一覧
              </h2>
              <ul className={styles.companyUl}>
                {classData && classData.links.map((company: any, index: number) => (
                  <li
                    key={index}
                    className={styles.companyLi}
                  >
                    <Link
                      className={styles.companyLink}
                      href={company.url}
                    >
                      {company.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}