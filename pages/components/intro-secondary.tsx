import React from "react";
import styles from "../../styles/Home.module.scss";
import { AiOutlineDown } from "react-icons/ai";
import { motion } from "framer-motion";

interface IntroProps {
  reference: any;
  scrollReference: any;
}

export default function IntroSecondary({
  reference,
  scrollReference,
}: IntroProps) {
  const iconSize = 60;
  const scroll = () => {
    //amount to scroll is negative to scroll up
    console.log("scroll");
    scrollReference?.current.scrollIntoView();
  };
  return (
    <div className={styles.sheet_body} ref={reference}>
      <div className={styles.intro_secondary_container}>
        <h2 className={styles.intro_secondary_container_title}>
          What is a digital garden?
        </h2>
        <div className={styles.intro_secondary_container_quote}>
          <hr />
          <p>
            The phrase "digital garden" is a metaphor for thinking about writing
            and creating that focuses less on the resulting "showpiece" and more
            on the process, care, and craft it takes to get there. - @jhooks
          </p>
          <hr />
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
