import React from 'react'
import Image from 'next/image'
import styles from './handleItems.module.scss'
import Link from 'next/link'

export const HandleItem = (props: any) => {

  return (
    <div>
      <h2 className={styles.h2}>{props.className}</h2>
      <div className={styles.groupImagesContainer}>
        <div className={styles.groupImagesWrapper}>
          {props.classData && props.classData.src.map((url: string, index: number) => {
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

      <h2 className={styles.h2}>取引業者一覧</h2>
      <ul className={styles.companyUl}>
        {props.classData && props.classData.links.map((
          link: { name: string, url: string },
          key: number
        ) => (
          <li
            key={key}
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
    </div>
  )
}
