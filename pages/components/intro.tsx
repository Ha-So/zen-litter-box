import React from "react";
import styles from "../../styles/Home.module.scss";
import { motion } from "framer-motion";

export default function sheet() {
  return (
    <div className={styles.sheet_intro}>
      {" "}
      <div className="intro">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="intro-header"
        >
          Hi.
        </motion.h1>
        <br />
        <p className={styles.paragraph_breaks_intro}>
          My name is Haris. This is my zen litter box. A collection of thoughts,
          things I learned that should be shared and other random assortments.
          <span>
            <br />
            If you can't tell by the name, we don't take ourselves too seriously
            here.
            <br />
            Welcome.
          </span>
        </p>
      </div>
    </div>
  );
}
