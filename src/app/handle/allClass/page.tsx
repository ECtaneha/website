import globalStyles from '../page.module.scss'
import styles from '../page.module.scss'
import Link from 'next/link'
import datas from '../../../static/links.json'

export default function Page() {

  return (
    <div className={globalStyles.contentsWrapper}>
      <div className={styles.h1Container}>
        <h1 className={styles.h1}>取扱品目別<br />メーカーリンク一覧</h1>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.contentsContainer}>
          <div>
            <div className={styles.allClass}>
                {datas.map((data, key) => (
                  <ul
                    key={key}
                    className={styles.companyUl}
                  >
                    <h2
                      id={data.name}
                      className={`
                        ${styles.h2}
                        ${styles.listTitle}
                      `}
                    >
                      {data.class.map((prevClass, key) => (
                        <span key={key}>{prevClass}　</span>
                      ))}
                    </h2>
                    {data.links.map((company, subKey) => (
                      <li
                        key={subKey}
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
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}