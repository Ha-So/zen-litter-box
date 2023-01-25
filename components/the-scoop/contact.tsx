import React from "react";
import styles from "../../styles/Scroller.module.scss";
import { GoMailRead } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const iconSize = 30;
  return (
    <div className={styles.contact_container}>
      <span className={styles.contact_item}>
        <span className={styles.contact_item}>
          <FaGithub size={iconSize} />
        </span>
        <span className={styles.contact_item}>
          <GoMailRead size={iconSize} />
        </span>
        <span className={styles.contact_item}>
          <FaLinkedin size={iconSize} />
        </span>
      </span>
    </div>
  );
};

export default Contact;
