import styles from "../../../styles/Notes.module.scss";
import { fetchNotes } from "../../../firebase/notes-store";
import { DocumentData } from "firebase/firestore/lite";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import Footer from "../footer";

function NotesContents() {
  const [notes, setNotes] = useState<DocumentData[]>([]);
  useEffect(() => {
    fetchNotes(notes, setNotes);
  }, []);

  setTimeout(() => {
    console.log("notes", notes);
  }, 5000);
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
              <motion.div
                key={index}
                whileHover={{ x: "15%" }}
                className={styles.notes_title}
              >
                <Link href={"/notes/" + blog.id}>
                  <p className={styles.notes_link}>{blog.title}</p>
                </Link>
              </motion.div>
            );
          })}
      </motion.div>
      <Footer addBuffer={true} />
    </div>
  );
}

export default NotesContents;
