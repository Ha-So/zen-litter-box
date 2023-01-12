import React, { useEffect } from "react";
import styles from "../../styles/Home.module.scss";
import { AiOutlineDown } from "react-icons/ai";
import { motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";

interface IntroProps {
  reference: any;
  scrollReference: any;
  setCurrentSection: (sectionIndex: number) => void;
}

export default function IntroSecondary({
  reference,
  scrollReference,
  setCurrentSection,
}: IntroProps) {
  const iconSize = 60;
  const sectionIndex = 1;
  const scroll = () => {
    scrollReference?.current.scrollIntoView();
  };
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
    <div className={styles.sheet_body}>
      <div className={styles.intro_secondary_container}>
        <h2 className={styles.intro_secondary_container_title} ref={reference}>
          What is a digital garden?
        </h2>
        <div className={styles.intro_secondary_container_quote} ref={ref}>
          <hr className={styles.intro_secondary_container_quote_line} />
          <p>
            The phrase &ldquo;digital garden&rdquo; is a metaphor for thinking
            about writing and creating that focuses less on the resulting
            &ldquo;showpiece&rdquo; and more on the process, care, and craft it
            takes to get there.
          </p>
          -{" "}
          <a className={styles.footer_link} href="https://twitter.com/jhooks">
            @jhooks
          </a>
          <br />
          <hr className={styles.intro_secondary_container_quote_line} />
        </div>
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
      </div>
    </div>
  );
}
