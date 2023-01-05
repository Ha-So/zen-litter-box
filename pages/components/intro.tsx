import React from "react";
import styles from "../../styles/Home.module.scss";
import { motion } from "framer-motion";
import { FaRegThumbsUp } from "react-icons/fa";
import useLocalStorage from "use-local-storage";

export default function sheet() {
  const iconSize = 10;
  return (
    <div className={styles.sheet_body}>
      {" "}
      <motion.div className="intro">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="intro-header"
        >
          Hi.
        </motion.h1>
        <h2 className="intro-header">
          My name is Haris. <br /> And this is my zen litter box.
        </h2>
        <p className={styles.paragraph_breaks_intro}>
          A collection of thoughts and things I learned that should be shared.
          <span>
            <br />A digital garden. Feel free to dig around.{" "}
          </span>
        </p>
      </motion.div>
    </div>
  );
}
