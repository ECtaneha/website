'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/components/HeroImage/heroImage.module.css'

export const HeroImage = () => {
  const [viewport, setViewport] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewport(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getImagePath = () => {
    if (viewport < 768) {
      return '/images/heroImage/heroImageSP.jpg';
    } else {
      return '/images/heroImage/heroImage2k.jpg';
    }
  };

  return (
    <div className={styles.container}>
      {/* <img
        className={styles.image}
        src={getImagePath()}
        alt={'heroimage'}
      /> */}
      <div className={styles.image}></div>
    </div>
  )
}
