import noteStyles from "../../styles/Notes.module.scss";
import { motion, useScroll } from "framer-motion";
import Head from "next/head";
import Buffer from "../../components/buffer";
import Contact from "../../components/the-scoop/contact";
import { Card } from "../../components/the-scoop/cards";
import { Axios, Nw, Postlight, END, amaya } from "../../public/card-images";
import {
  AxiosText,
  NwText,
  PostlightText,
  ENDText,
  AmayaText,
} from "../../values";

export interface ScoopProps {
  width: number;
}

const TheScoop = ({ width }: ScoopProps) => {
  const { scrollYProgress } = useScroll();
  const isMobile = width < 768;
  const food: [string, number, number][] = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320],
  ];
  const images: [string, number, number, string, string][] = [
    [Axios, 340, 10, AxiosText, "https://www.axios.com"],
    [Nw, 20, 40, NwText, "https://feinstein.northwell.edu/"],
    [Postlight, 60, 90, PostlightText, "https://postlight.com/labs"],
    [END, 80, 120, ENDText, "https://www.elnuevodia.com/"],
    [null, 100, 140, AmayaText, "https://github.com/Ha-So/Amaya-Ko"],
  ];
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
          <>
            {images.map(([cardImage, hueA, hueB, cardText, linkRef], index) => (
              <Card
                hueA={hueA}
                hueB={hueB}
                cardImage={cardImage}
                key={index}
                cardText={cardText}
                isMobile={width < 1000}
                linkRef={linkRef}
              />
            ))}
          </>
          <div style={{ height: 200 }} />
        </div>
      </div>
    </div>
  );
};

export default TheScoop;
