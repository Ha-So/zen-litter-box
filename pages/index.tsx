import Head from "next/head";
import { useEffect, useState, useLayoutEffect, useRef, use } from "react";
import styles from "../styles/Home.module.scss";
import IntroSecondary from "../components/home/intro-secondary";
import IntroTertiary from "../components/home/intro-tertiary";
import Intro from "../components/home/intro";
import Coffee from "../components/coffee";

export interface HomeProps {
  width: number;
}

export default function Home({ width }: HomeProps) {
  const introSecondary = useRef();
  const introTertiary = useRef();
  const data_x = width < 768 ? "18" : "200";
  const totalSections = 3;
  const [currentSection, setCurrentSection] = useState(1);

  const getIndicatorClass = (index: number) => {
    if (currentSection == index) {
      return styles.navbar_indicators_selected;
    }
    return styles.navbar_indicators;
  };

  return (
    <div className={styles.sheet_background}>
      {/* <Coffee /> */}
      <div className={styles.sheet_container}>
        <Intro
          scrollReference={introSecondary}
          setCurrentSection={setCurrentSection}
        />
        <IntroSecondary
          reference={introSecondary}
          scrollReference={introTertiary}
          setCurrentSection={setCurrentSection}
        />
        <IntroTertiary
          reference={introTertiary}
          setCurrentSection={setCurrentSection}
        />
      </div>
      <div className={styles.navbar_container}>
        <ul className={styles.navbar}>
          {Array?.from(Array(totalSections))?.map((_, i) => (
            <li key={i} className={getIndicatorClass(i)}></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
