import React from "react";
import styles from "../../styles/Scroller.module.scss";
import { GoMailRead } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export interface ContactProps {
  isMobile: boolean;
}
const Contact = ({ isMobile }: ContactProps) => {
  const iconSize = 30;

  return (
    <div className={styles.contact_container}>
      <span className={styles.contact_item}>
        <motion.a
          href={"https://github.com/Ha-So"}
          whileTap={isMobile ? { scale: 1.4 } : { scale: 1.0 }}
          whileHover={!isMobile ? { scale: 1.4 } : { scale: 1.0 }}
          className={styles["contact_item--end-left"]}
          animate={{ x: 0 }}
          initial={{ x: -500 }}
          transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
        >
          <FaGithub size={iconSize} />
        </motion.a>
        <motion.a
          href={"mailto: haris.sohl@gmail.com"}
          whileTap={isMobile ? { scale: 1.4 } : { scale: 1.0 }}
          whileHover={!isMobile ? { scale: 1.4 } : { scale: 1.0 }}
          className={styles.contact_item}
          animate={{ y: 0 }}
          initial={{ y: 500 }}
          transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
        >
          <GoMailRead size={iconSize} />
        </motion.a>
        <motion.a
          href={"https://www.linkedin.com/in/haris-sohail-726b36260/"}
          whileTap={isMobile ? { scale: 1.4 } : { scale: 1.0 }}
          whileHover={!isMobile ? { scale: 1.2 } : { scale: 1.0 }}
          className={styles["contact_item--end-right"]}
          animate={{ x: 0 }}
          initial={{ x: 500 }}
          transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
        >
          <FaLinkedin size={iconSize} />
        </motion.a>
      </span>
    </div>
  );
};

export default Contact;
