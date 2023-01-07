import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaRegThumbsUp, FaArrowCircleDown } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import Typewriter from "typewriter-effect";

interface IntroProps {
  scrollReference: any;
}

export default function sheet({ scrollReference }: IntroProps) {
  const iconSize = 60;
  const [showCursor, setShowCursor] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const scroll = () => {
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
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .pasteString(" My name is Haris.<br />", null)
                .pauseFor(1200)
                .pasteString("And this is my zen litter box.", null)
                .callFunction(() => setShowCursor(true))
                .start();
            }}
            options={{
              cursor: " ",
            }}
          />
        </h2>
        {showCursor && (
          <div className={styles.paragraph_breaks_intro}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(200)
                  .changeDelay(30)
                  .typeString(
                    " A collection of thoughts and things I learned that should be shared."
                  )
                  .typeString(
                    "<br />A digital garden. Feel free to dig around."
                  )
                  .callFunction(() => setShowScroll(true))
                  .start();
              }}
            />
          </div>
        )}
        {showScroll && (
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0, 1, 0], scale: 1.0 }}
            transition={{ repeat: Infinity, duration: 5 }}
            className={styles.intro_icon_container}
          >
            <h4 className={styles.scroll_text}>Scroll Down</h4>
            <AiOutlineDown
              className={styles.intro_icon}
              size={iconSize}
              onClick={() => scroll()}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
