import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";
import { GiFullFolder, GiSunrise, GiNotebook } from "react-icons/gi";
import { FaCat } from "react-icons/fa";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export default function IntroTertiary({ reference, scrollReference }) {
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  //   trackVisibility: true,
  // });

  const [inView, setInView] = useState(false);

  const iconSize = 30;
  const footerText = "I made this site with a lot of love.";
  const footerTextCoffee = "If you like it, I like ";
  const footerTextGit = ". Checkout the code on my ";
  const variants = {
    open: { opacity: 0.6, y: 0, transition: { duration: 3 } },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <div className={styles.sheet_body} ref={reference}>
      <div className={styles.intro_secondary_container}>
        <h2 className={styles.intro_secondary_container_title}>Menu Legend</h2>
        <ul className={styles.space_list}>
          <li>
            <GiNotebook size={iconSize} /> - A collection of notes, snippets and
            interactions
          </li>
          <li>
            {" "}
            <FaCat size={iconSize} /> - My cat Minushka will dig the litter box
            for a random treasure
          </li>
          <li>
            {" "}
            <GiFullFolder size={iconSize} /> - A portfolio of my work and
            experience
          </li>
          <li>
            {" "}
            <GiSunrise size={iconSize} /> - Light and dark mode for the sake of
            your eyes
          </li>
        </ul>
        <InView onChange={setInView}>
          {({ ref, inView }) => (
            <motion.div
              animate={inView ? "open" : "closed"}
              variants={variants}
              className={styles.footer}
              ref={ref}
            >
              <div className={styles.footer_text}>
                {footerText} <span>&#128150;</span>
                {footerTextCoffee}
                <a
                  className={styles.footer_link}
                  href="https://www.buymeacoffee.com/harissocool"
                >
                  coffee
                </a>
                {footerTextGit}
                <a
                  className={styles.footer_link}
                  href="https://github.com/Ha-So"
                >
                  GitHub
                </a>
                .
              </div>
            </motion.div>
          )}
        </InView>
      </div>
    </div>
  );
}
