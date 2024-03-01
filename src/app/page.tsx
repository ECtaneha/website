import styles from "./page.module.scss";
import { HeroImage } from "../components/HeroImage/HeroImage";
import { Monologue } from "../components/Monologue/Monologue";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { News } from "../components/News/News";
import { Mission } from '../components/Mission/Mission'
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { HandleItems } from "@/components/HandleItems/HandleItems";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.contentsContainer}>
        <HeroImage />
        <AboutUs />
        <Mission />
        <HandleItems />
        <News />
      </div>
    </main>
  );
}
