import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './breadCrumb.module.scss';

export const BreadCrumb = () => {
  const _pathname = usePathname()
  const pathName = _pathname.replace(`/`, '');
  return (
    <div className={styles.breadCrumb}>{pathName}</div>
  )
}
