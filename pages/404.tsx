import styles from "../styles/Notes.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const PageError = () => {
  return (
    <div className={styles.sheet_background}>
      <Head>
        <title>Zen Litter Box</title>
      </Head>
      <div className={styles.sheet_container}>
        <div className={styles.sheet_body}>
          <motion.h2
            initial={{ y: 500, scale: 1.0 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={styles.notes_404}
          >
            You have exited the litter box. Please return.
            <Link
              href={
                "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404?retiredLocale=de"
              }
            >
              <p className={styles.notes_404_sub}>
                Click to learn more about 404 errors.
              </p>
            </Link>
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default PageError;
