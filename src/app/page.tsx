'use client'
import styles from "./page.module.scss";
import { HeroImage } from "@/components/HeroImage/HeroImage";
import { Mission } from '@/components/Mission/Mission'
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { HandleItems } from "@/components/HandleItems/HandleItems";
import AnnouncementList from "@/components/Announcement/AnnouncementList";
import { useState, useEffect } from "react";

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const backgrounds = [
      'url(images/backgroundImage/1.jpg)',
      'url(images/backgroundImage/2.jpg)',
      'url(images/backgroundImage/3.jpg)',
      'url(images/backgroundImage/4.jpg)',
      'url(images/backgroundImage/5.jpg)',
      'url(images/backgroundImage/6.jpg)',
      'url(images/backgroundImage/7.jpg)',
      'url(images/backgroundImage/8.jpg)',
      'url(images/backgroundImage/9.jpg)',
    ];
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBackground = backgrounds[randomIndex];
    setBackgroundImage(selectedBackground);
  }, []);

  return (
    <main
      className={styles.main}
      style={{'backgroundImage': backgroundImage}}
    >
      <HeroImage />
      <div className={styles.space}></div>
      <div className={styles.contentsContainer}>
        <AboutUs />
        <div className={styles.space}></div>
        <Mission />
        <div className={styles.space}></div>
        <HandleItems />
        <div className={styles.space}></div>
        <AnnouncementList />
        <div className={styles.space}></div>
      </div>
    </main>
  );
}
