import noteStyles from "../../styles/Notes.module.scss";
import { motion, useScroll } from "framer-motion";
import Head from "next/head";
import HorizontalScroller from "../../components/the-scoop/horizontal-scroller";
import Card from "../../components/the-scoop/card";
import nw from "../../public/card-images/nw.jpg";
import styles from "../../styles/Scroller.module.scss";

const TheScoop = () => {
  const { scrollYProgress } = useScroll();
  const cardInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore";
  const clientChildren = [
    <Card cardText={cardInfo} cardImage={nw} cardLink={""} />,
    <Card cardText={cardInfo} cardImage={nw} cardLink={""} />,
    <Card cardText={cardInfo} cardImage={nw} cardLink={""} />,
    <Card cardText={cardInfo} cardImage={nw} cardLink={""} />,

    <Card cardText={cardInfo} cardImage={nw} cardLink={""} />,
    <Card cardText={cardInfo} cardImage={nw} cardLink={""} />,
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
          <div className={styles.scroller_row}>
            <h2 className={styles.scroller_pretext}>
              Clients I've engaged with
            </h2>
            <motion.div
              initial={{ x: 700, scale: 1.0 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className={styles.scroller_column}
            >
              {" "}
              <HorizontalScroller children={clientChildren} />
            </motion.div>
          </div>
          <div className={styles.scroller_row}>
            <h2 className={styles.scroller_pretext}>
              Clients I've engaged with
            </h2>
            <motion.div
              initial={{ x: 700, scale: 1.0 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className={styles.scroller_column}
            >
              {" "}
              <HorizontalScroller children={clientChildren} />
            </motion.div>
          </div>

          {/* Once in view slide in from left horizontal scroller of projects */}
          {/* Contact Info - LinkedIn, Github, Email */}
        </div>
      </div>
    </div>
  );
};

export default TheScoop;
