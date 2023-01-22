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
          <motion.h2
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className={noteStyles.notes_header}
          >
            The Scoop
          </motion.h2>
          <div className={styles.scroller_row}>
            <p className={styles.scroller_pretext}>
              Some of the clients I've engaged with
            </p>
            <motion.div
              initial={{ x: 700, scale: 1.0 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
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
