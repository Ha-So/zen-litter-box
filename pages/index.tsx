import Head from "next/head";
import { useEffect, useState, useLayoutEffect, useRef, use } from "react";
import styles from "../styles/Home.module.scss";
import stylesNav from "../styles/Navbar.module.scss";
import IntroSecondary from "./components/home/intro-secondary";
import IntroTertiary from "./components/home/intro-tertiary";
import Intro from "./components/home/intro";
import Navbar from "./components/navbar";
import { motion, useScroll, useSpring } from "framer-motion";

export interface HomeProps {
  width: number;
}

export default function Home({ width }: HomeProps) {
  const introSecondary = useRef();
  const introTertiary = useRef();
  const data_x = width < 768 ? "18" : "200";

  return (
    <div className={styles.sheet_background}>
      <div className={styles.sheet_container}>
        <Intro scrollReference={introSecondary} />
        <IntroSecondary
          reference={introSecondary}
          scrollReference={introTertiary}
        />
        <IntroTertiary reference={introTertiary} />
      </div>
    </div>
  );
}
