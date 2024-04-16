'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/components/HeroImage/heroImage.module.css'
import Image from 'next/image'
import desktopImage from '/public/images/heroImage/heroImage4k.jpg'
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
        width={1900}
        height={1000}
        src={getImagePath()}
        alt={'heroimage'}
      />
    </div>
  )
}
