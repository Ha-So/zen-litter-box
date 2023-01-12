import styles from "../../styles/Notes.module.scss";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../footer";

export interface NotesContentsProps {
  entriesData: Array<any>;
}
function NotesContents({ entriesData }: NotesContentsProps) {
  return (
    <div className={styles.sheet_body}>
      <motion.h2
        initial={{ opacity: 0, scale: 1.0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className={styles.notes_header}
      >
        Notes
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 1.0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className={styles.notes_container}
      >
        {entriesData?.map((entry: any, index) => (
          <div key={entry.id}>
            <motion.div
              key={index}
              whileHover={{ x: "15%" }}
              className={styles.notes_title}
            >
              <Link href={`/notes/${entry.slug}`}>{entry.title}</Link>
            </motion.div>
            <br />
          </div>
        ))}
      </motion.div>
      <Footer addBuffer={true} />
    </div>
  );
}

export default NotesContents;
