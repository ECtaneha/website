import React from 'react';
import styles from './breadCrumb.module.scss';
import Link from 'next/link';

export const BreadCrumb = (props: { parentPath: string, childPath: string }) => {

  return (
    <p className={styles.breadCrumb}>
      <Link className={styles.breadCrumbParent} href='/'>{props.parentPath}</Link>
      <span className={styles.breadCrumb}>{`　>　${props.childPath}`}</span>
    </p>
  )
};
