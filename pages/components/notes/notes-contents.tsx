import styles from "../../../styles/Notes.module.scss";
import { fetchNotes } from "../../api/notesApi";
import { DocumentData } from "firebase/firestore/lite";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function NotesContents() {
  const [notes, setNotes] = useState<DocumentData[]>([]);

  useEffect(() => {
    fetchNotes(notes, setNotes);
  }, []);
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
        {notes &&
          notes.map((blog, index) => {
            return (
              <div key={index}>
                <Link href="/">
                  <motion.h4
                    whileHover={{ x: "10%" }}
                    className={styles.notes_title}
                  >
                    {blog.title}
                  </motion.h4>
                </Link>
              </div>
            );
          })}
      </motion.div>
    </div>
  );
}

export default NotesContents;
