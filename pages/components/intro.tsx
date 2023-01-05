import React from "react";
import styles from "../../styles/Home.module.scss";
import { motion } from "framer-motion";
import { FaRegThumbsUp, FaArrowCircleDown } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

export default function sheet({ scrollReference }) {
  const iconSize = 60;
  const scroll = () => {
    //amount to scroll is negative to scroll up
    console.log("scroll");
    scrollReference?.current.scrollIntoView();
  };
  return (
    <div className={styles.sheet_body}>
      <div className="intro">
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
        <motion.span whileHover={{ scale: 1.2 }} className={styles.intro_icon}>
          <AiOutlineDown size={iconSize} onClick={() => scroll()} />
        </motion.span>
      </div>
    </div>
  );
}
