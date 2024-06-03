import React from 'react';
import Link from 'next/link';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import styles from '../page.module.scss';

type Data = {
  id: string;
  name: string;
  class: string[];
  description: string;
  thumbnail: string[];
  src: string[];
  minorClass: string[];
  minorClassDescription: string[];
  minorClassImage: string[];
  links: {
      name: string;
      url: string;
  }[];
}

export const SetCategory = (data: Data) => {
  return (
    <ul className={styles.companyUlAllClass}>
      <h2 id={data.name} className={`${styles.h2} ${styles.listTitle}`}>
        <Link href={{ pathname: `/handle`, query: { id: data.id, name: data.name } }}>
          <div className={styles.classNameWrapper}>
            <div>
              {data.class.map((prevClass: string, key: number) => (
                <span key={key}>{prevClass} </span>
              ))}
            </div>
            <PlayArrowIcon className={styles.arrow} />
          </div>
        </Link>
      </h2>
      {data.links.map((link: {name: string, url: string}) => (
        <li key={link.name} className={styles.companyLi}>
          <Link className={styles.companyLink} href={link.url}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
