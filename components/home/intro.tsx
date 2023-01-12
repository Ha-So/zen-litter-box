import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.scss";
import { motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface IntroProps {
  scrollReference: any;
  setCurrentSection: (sectionIndex: number) => void;
}

export default function sheet({
  scrollReference,
  setCurrentSection,
}: IntroProps) {
  const iconSize = 60;
  const sectionIndex = 0;
  const [showCursor, setShowCursor] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setCurrentSection(sectionIndex);
    }
  }, [inView]);

  const scroll = () => {
    scrollReference?.current.scrollIntoView();
  };

  const waitForAnimation = () => {
    setTimeout(() => {
      setShowCursor(true);
    }, 2000);
  };
  return (
    <div className={styles.sheet_body}>
      <div className="intro">
        <motion.h1
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="intro-header"
          ref={ref}
        >
          Hi.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="intro-header"
          onAnimationStart={() => {
            waitForAnimation();
          }}
        >
          My name is Haris. <br /> And this is my{" "}
          <Link className={styles.link} href="/notes/about-this-garden">
            zen litter box
          </Link>
          .
        </motion.h2>
        {showCursor && (
          <div className={styles.paragraph_breaks_intro}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(500)
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
