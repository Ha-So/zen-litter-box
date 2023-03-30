import React, { useEffect } from "react";
import styles from "../../styles/Home.module.scss";
import { GiFullFolder, GiSunrise, GiNotebook } from "react-icons/gi";
import { FaCat } from "react-icons/fa";
import { TbShovel } from "react-icons/tb";
import Footer from "../footer";
import { useInView } from "react-intersection-observer";
import NotesContents from "../notes/notes-contents";
import { recommendedReads } from "../../values";
import Link from "next/link";
import { motion } from "framer-motion";
import noteStyles from "../../styles/Notes.module.scss";

interface IntroProps {
  reference: any;
  setCurrentSection: (sectionIndex: number) => void;
}

export default function IntroTertiary({
  reference,
  setCurrentSection,
}: IntroProps) {
  const iconSize = 30;
  const sectionIndex = 2;
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setCurrentSection(sectionIndex);
    }
  }, [inView, setCurrentSection]);

  return (
    <div className={styles.sheet_body} ref={reference}>
      <div className={styles.intro_tertiary_container_scroll}>
        <h2 className={styles.intro_tertiary_container_title} ref={ref}>
          recommended reading ⭐
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className={styles.notes_container}
        >
          {recommendedReads?.map((entry: any, index) => (
            <div key={entry.id}>
              <motion.div
                key={index}
                whileHover={{ x: "15%" }}
                className={noteStyles.notes_title}
              >
                <Link href={`/notes/${entry.slug}`}>{entry.title}</Link>
              </motion.div>
              <br />
            </div>
          ))}
          <motion.div
            key={"more"}
            whileHover={{ x: "15%" }}
            className={noteStyles.notes_title}
          >
            <Link href={`/notes`}>{`more notes ->`}</Link>
          </motion.div>
        </motion.div>

        <h2 className={styles.intro_tertiary_container_title} ref={ref}>
          stay connected 🔌
        </h2>

        <div className="container">
          <div className="header">
            <h1 className="title">Zen Litter Box</h1>
            <span className="byline">by Haris Sohail</span>
          </div>
          <div className="description">
            A collection of thoughts and web dev features no one asked for.
          </div>
          <form
            action="https://tinyletter.com/Hams"
            method="post"
            target="popupwindow"
            onsubmit="window.open('https://tinyletter.com/Hams', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
          >
            <p>
              <label htmlFor="tlemail">Enter your email address</label>
            </p>
            <p>
              <input type="text" name="email" id="tlemail" />
            </p>
            <input type="hidden" value="1" name="embed" />
            <input type="submit" value="Subscribe" />
            <p>
              <a href="https://tinyletter.com" target="_blank">
                powered by TinyLetter
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
