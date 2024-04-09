import globalStyles from '../../page.module.scss'
import styles from '../page.module.scss'
import Link from 'next/link'
import datas from '../../../static/links.json'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
                  className={styles.companyUlAllClass}
                >
                  <h2
                    id={data.name}
                    className={`
                      ${styles.h2}
                      ${styles.listTitle}
                    `}
                  >
                    <Link href={{
                      pathname: `/handle`,
                      query: { id: data.id, name: data.name }
                    }}>
                      <div className={styles.classNameWrapper}>
                        <div>
                          {data.class.map((prevClass, key) => (
                            <span key={key}>{prevClass}　</span>
                          ))}
                        </div>
                        <PlayArrowIcon className={styles.arrow}/>
                      </div>
                    </Link>
                  </h2>
                  {data.links.map((link, subKey) => (
                    <li
                      key={subKey}
                      className={styles.companyLi}
                    >
                      <Link
                        className={styles.companyLink}
                        href={link.url}
                      >
                        {link.name}
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