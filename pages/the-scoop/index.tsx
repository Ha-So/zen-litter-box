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
        <div className={styles.sheet_body}>
          <motion.h2
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className={styles.notes_header}
          >
            The Scoop
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default TheScoop;
