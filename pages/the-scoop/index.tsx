import styles from "../../styles/Notes.module.scss";
import { motion, useScroll } from "framer-motion";
import Head from "next/head";

const TheScoop = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.sheet_background}>
      <Head>
        <title>Zen Litter Box</title>
      </Head>
      <div className={styles.sheet_container}>
        <motion.div
          className={styles.progress_bar}
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </div>
  );
};

export default TheScoop;
