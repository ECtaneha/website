import styles from "./page.module.scss";
import { HeroImage } from "@/components/HeroImage/HeroImage";
import { Mission } from '@/components/Mission/Mission'
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { HandleItems } from "@/components/HandleItems/HandleItems";
import AnnouncementList from "@/components/Announcement/AnnouncementList";

export default function Home() {

  return (
    <main className={styles.main}>
      <HeroImage />
      <div className={styles.contentsContainer}>
        <AboutUs />
        <Mission />
        <HandleItems />
        <AnnouncementList />
      </div>
    </main>
  );
}
