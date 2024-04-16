'use client'
import React, { useContext, useEffect, useState } from 'react'
import globalStyles from '@/app/page.module.scss'
import styles from './page.module.scss'
import Image from 'next/image'
import presidentPhoto from '/public/images/information/presidentPhoto.jpg'
import Link from 'next/link'
import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb'
import { usePathname } from 'next/navigation';
import { RenderParagraphs } from '@/lib/RenderParagraphs'
import { CurrentLanguage } from '@/app/layout'
import datas from './information.json'

function toFullWidth(str: string) {
  str = str.replace(/[A-Za-z0-9]/g, function(s) {
    return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
  });
  return str;
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
  const { language = 'Japanese', setLanguage } = useContext(CurrentLanguage);
  const [loading, setLoading] = useState<boolean>(true);
  const [information, setInformation] = useState<InfoData>({
    language: '',
    date: '',
    parentAddress: '',
    information: [],
    history: [],
    linkMenu: { h1: '', menu: [] },
    greet: {
      content: '',
      company: '',
      post: '',
      name: ''
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const informationData = datas.find(item => item.language === language);
      if (informationData) {
        setInformation(informationData);
        setLoading(false);
      }
    };
    fetchData();
  }, [language]);

  if (loading || !information) {
    return <div>Loading...</div>;
  }

  return (
    <div className={globalStyles.contentsWrapper}>
      <div className={styles.h1Container}>
        <h1 className={styles.h1}>{information.linkMenu.h1}</h1>
      </div>

      <div className={styles.informationContainer}>
        <BreadCrumb
          parentPath={information.parentAddress}
          childPath={information.linkMenu.h1}
        />

        <div className={styles.links}>
          {information.linkMenu.menu.map((menu, key) => (
            <Link
              key={key}
              className={`
                ${styles.link}
                ${isActiveLink && styles.isActiveLink}
              `}
              href={menu.url}
            >
              {menu.title}
            </Link>
          ))}
        </div>

        <div
          id='president'
          className={styles.informationWrapper}>
          <h2 className={styles.h2}>
            {information.linkMenu.menu[0].title}
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
                {RenderParagraphs(information.greet.content.replace('{now}', `${now}`), '\n')}
              </p>
              <div className={styles.presidentNameContainer}>
                {information.greet.company}
                <br />
                {information.greet.post}
                <span className={styles.presidentName}>
                  {information.greet.name}
                </span>
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
            {information.linkMenu.menu[1].title}
          </h2>
          <p className={styles.rightNow}>
            {information.date}
          </p>
          <table  className={styles.table01}>
            <tbody>
              {information.history.map((res: any, key: React.Key) => (
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
            {information.linkMenu.menu[2].title}
          </h2>
          <p className={styles.rightNow}>
            {information.date}
          </p>
          <table className={styles.table01}>
          <tbody>
              {information.information.map((res: any, key: React.Key) => (
                <tr key={key}>
                  <th>{res.title}</th>
                  <td>{RenderParagraphs(res.description, '\n')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

type InfoData = {
  language: string;
  date: string;
  parentAddress: string;
	information: infoData;
	history: histData;
  linkMenu: linkData;
  greet: greet;
};

type infoData = {
	title: string;
	description: string;
}[];

type histData = {
	title: string;
	description: string;
}[];

type linkData = {
  h1: string;
  menu: {
    title: string;
    url: string;
  }[];
};

type greet = {
  content: string;
  company: string;
  post: string;
  name: string;
}
