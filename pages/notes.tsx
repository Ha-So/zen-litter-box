import styles from "../styles/Notes.module.scss";
import NotesContents from "./components/notes/notes-contents";
import { motion, useScroll } from "framer-motion";

export default function Notes() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  return (
    <div className={styles.sheet_background}>
      <div className={styles.sheet_container}>
        {scrollYProgress?.current > 0 ? (
          <motion.div
            className={styles.progress_bar}
            style={{ scaleX: scrollYProgress }}
          />
        ) : (
          <div className={styles.progress_bar}>Hello</div>
        )}
        <NotesContents />
      </div>
    </div>
  );
}
