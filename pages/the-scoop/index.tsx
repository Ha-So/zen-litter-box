import { useState } from "react";
import noteStyles from "../../styles/Notes.module.scss";
import { motion, useScroll } from "framer-motion";
import Head from "next/head";
import styles from "../../styles/Scroller.module.scss";
import Contact from "../../components/the-scoop/contact";
import { Cube } from "../../components/the-scoop/cube";

export interface ScoopProps {
  width: number;
}

const TheScoop = ({ width }: ScoopProps) => {
  const { scrollYProgress } = useScroll();
  const isMobile = width < 768;

  return (
    <div className={noteStyles.sheet_background}>
      <Head>
        <title>Zen Litter Box</title>
      </Head>
      <div className={noteStyles.sheet_container}>
        <motion.div
          className={noteStyles.progress_bar}
          style={{ scaleX: scrollYProgress }}
        />
        <div className={noteStyles.sheet_body}>
          <motion.h1
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className={noteStyles.notes_header_scoop}
          >
            The Scoop
          </motion.h1>
          <Contact isMobile={isMobile} />
          <motion.div
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          <p className={styles.banner}>
            Apologies, this part of the litter box is still under construction.
            Please interact with this cube while you wait.
          </p>

          <div className={styles["cube-container"]}>
            <Cube />
          </div>

          {/* Once in view slide in from left horizontal scroller of projects */}
          {/* Contact Info - LinkedIn, Github, Email */}
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default TheScoop;
