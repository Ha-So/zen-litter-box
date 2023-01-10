import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Buffer from "./buffer";

export interface FooterProps {
  addBuffer?: boolean;
}

export default function Footer({ addBuffer }: FooterProps) {
  const [inView, setInView] = useState(false);

  const footerText = "I made this garden with a lot of love.";
  const footerTextCoffee = "If you like it, my cat Minushka likes ";
  const footerTextGit = ". Checkout the code on my ";
  const variants = {
    open: { opacity: 0.7, y: 0, transition: { duration: 3 } },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <>
      {addBuffer && <Buffer />}
      <InView onChange={setInView}>
        {({ ref, inView }) => (
          <motion.div
            animate={inView ? "open" : "closed"}
            variants={variants}
            className={styles.footer}
            ref={ref}
          >
            <div className={styles.footer_text}>
              {footerText}
              <span>&#128150; </span>
              {footerTextCoffee}
              <a
                className={styles.footer_link}
                href="https://www.buymeacoffee.com/harissocool"
              >
                treats
              </a>
              {footerTextGit}
              <a className={styles.footer_link} href="https://github.com/Ha-So">
                GitHub
              </a>
              .
            </div>
          </motion.div>
        )}
      </InView>
    </>
  );
}
