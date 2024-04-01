'use client'
import React, { useState } from 'react'
import globalStyles from '../page.module.scss'
import styles from './page.module.scss'
import Image from 'next/image'
import history from './history.json'
import information from './information.json'
import presidentPhoto from '/public/images/information/presidentPhoto.jpg'
import Link from 'next/link'
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb'
import { usePathname } from 'next/navigation';

function toFullWidth(str: string) {
  str = str.replace(/[A-Za-z0-9]/g, function(s) {
    return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
  });
  return str;
}

const texts = (target: string) => {
  const text = target.split(/(\n)/).map((item: string, key: React.Key | null | undefined) => {
    return (
      <React.Fragment key={key}>
        {item.match(/\n/) ? <br /> : item}
      </React.Fragment>
    )
  })
  return <>{text}</>
}

export default function Page() {
  const [isActiveLink, setIsActiveLink] = useState<boolean>(false);
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const YEAR = toFullWidth(year.toString());
  const MONTH = toFullWidth(month.toString());
  const now = year - 1978;
  const _pathname = usePathname()
  const pathName = _pathname.replace(`/`, '');

  return (
    <div className={globalStyles.contentsWrapper}>
      <div className={styles.h1Container}>
        <h1 className={styles.h1}>会社概要</h1>
      </div>

      <div className={styles.informationContainer}>
        <BreadCrumb
          parentPath='トップ'
          childPath='会社概要'
        />


        <div className={styles.links}>
          {linkMenu.map((menu, key) => (
            <Link
              key={key}
              className={`
                ${styles.link}
                ${isActiveLink && styles.isActiveLink}
              `}
              href={menu.url}>
                {menu.title}
            </Link>
          ))}
        </div>

        <div
          id='president'
          className={styles.informationWrapper}>
          <h2 className={styles.h2}>
            社長あいさつ
          </h2>
          <div className={styles.greet}>
            <Image
              className={styles.presidentPhoto}
              src={presidentPhoto}
              width={200}
              height={200}
              alt='presidentPhoto'
            />
            <div className={styles.greetWrapper}>
              <p>
                創業者・山根良彦の一念により興った弊社も今年で{now}期を迎えました。お客様やお取引先様にご愛顧いただき、お陰様で創業以来黒字経営を続けられています。人々の困難の為に奔走した先人達の理念を継承しつつ、今後も新たなことに挑戦し続け、人々の生活を支えられるよう邁進していく所存です。
              </p>
              <div className={styles.presidentNameContainer}>
                株式会社タイシン<br />
                代表取締役社長
                <span className={styles.presidentName}>廣田敬司</span>
              </div>
            </div>
          </div>
        </div>

        <div
          id='history'
          className={styles.informationWrapper}>
          <h2 className={`
            ${styles.h2}
            ${styles.history}
          `}>
            会社沿革
          </h2>
          <p className={styles.rightNow}>
          {`（${YEAR}年${MONTH}月末現在）`}
          </p>
          <table  className={styles.table01}>
            <tbody>
              {history.map((res: any, key: React.Key) => (
                <tr key={key}>
                  <th>{res.title}</th>
                  <td>{res.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          id='information'
          className={styles.informationWrapper}>
          <h2 className={`
            ${styles.h2}
            ${styles.information}
          `}>
            会社情報
          </h2>
          <p className={styles.rightNow}>
            {`（${YEAR}年${MONTH}月末現在）`}
          </p>
          <table className={styles.table01}>
          <tbody>
              {information.map((res: any, key: React.Key) => (
                <tr key={key}>
                  <th>{res.title}</th>
                  <td>{texts(res.description)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const linkMenu = [
  {
    'title': '社長あいさつ',
    'url': '#president'
  },
  {
    'title': '会社沿革',
    'url': '#history'
  },
  {
    'title': '会社情報',
    'url': '#information'
  },
]

