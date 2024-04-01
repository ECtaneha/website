'use client'
import React, { useEffect, useState } from 'react'
import styles from '../HeroImage/heroImage.module.css'
import Image from 'next/image'
import desktopImage from '/public/images/heroImage/hero-image1.jpg'
import mobileImage from '/public/images/heroImage/hero-image1-android.jpg'

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
      return mobileImage;
    } else {
      return desktopImage;
    }
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        width={1920}
        height={1000}
        src={getImagePath()}
        alt={'heroimage'}
      />
    </div>
  )
}
