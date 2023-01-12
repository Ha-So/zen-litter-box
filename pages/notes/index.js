import Link from "next/link";
import db from "../../utils/db";
import styles from "../../styles/Notes.module.scss";
import NotesContents from "../../components/notes/notes-contents";
import { motion, useScroll } from "framer-motion";

const Notes = (props) => {
  const { entriesData } = props;
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.sheet_background}>
      <div className={styles.sheet_container}>
        <motion.div
          className={styles.progress_bar}
          style={{ scaleX: scrollYProgress }}
        />
        <NotesContents entriesData={entriesData} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const entries = await db
    .collection("entries")
    .orderBy("created", "asc")
    .get();
  const entriesData = entries.docs.map((entry) => ({
    ...entry.data(),
    id: entry.id,
    created: null,
  }));
  return {
    props: { entriesData },
    revalidate: 10,
  };
};

export default Notes;
