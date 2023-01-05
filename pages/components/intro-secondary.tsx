import React from "react";
import styles from "../../styles/Home.module.scss";
import { AiOutlineDown } from "react-icons/ai";
import { motion } from "framer-motion";

export default function IntroSecondary({ reference, scrollReference }) {
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

          <p>
            A digital garden is... less about: 👎 Chronologically sorted posts
            👎 Paginated posts 👎 Content marketing 👎 Perfection <br /> ...and
            more about: 👍 Non-performative blogging 👍 Personal curation 👍
            Shipping
          </p>
        </div>
        <motion.span whileHover={{ scale: 1.2 }}>
          <AiOutlineDown
            size={iconSize}
            className={styles.intro_icon}
            onClick={() => scroll()}
          />
        </motion.span>
      </div>
    </div>
  );
}
