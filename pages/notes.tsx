import styles from "../styles/Notes.module.scss";
import NotesContents from "./components/notes/notes-contents";
import { motion, useScroll } from "framer-motion";

export default function Notes() {
  const { scrollYProgress } = useScroll();
  return (
    <div className={styles.sheet_background}>
      <div className={styles.sheet_container}>
        <motion.div
          className={styles.progress_bar}
          style={{ scaleX: scrollYProgress }}
        />
        <NotesContents />
      </div>
    </div>
  );
}
