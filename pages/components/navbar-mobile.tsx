import React from "react";
import styles from "../../styles/Navbar.module.scss";
import { GiFullFolder } from "react-icons/gi";
import { FaLongArrowAltDown, FaLongArrowAltUp, FaCat } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NavbarMobile() {
  const iconSize = 30;
  return (
    <div className={styles.navbar_mobile_container}>
      <div className={styles.navbar_icons}>
        <motion.span
          className={styles.navbar_icons_hover}
          whileHover={{ scale: 1.1 }}
        >
          <FaLongArrowAltDown size={iconSize} />
        </motion.span>
        <motion.span
          className={styles.navbar_icons_hover}
          whileHover={{ scale: 1.1 }}
        >
          {" "}
          <FaLongArrowAltUp size={iconSize} />
        </motion.span>
        <motion.span
          className={styles.navbar_icons_hover}
          whileHover={{ scale: 1.1 }}
        >
          {" "}
          <FaCat size={iconSize} className={styles.navbar_icons_hover} />
        </motion.span>

        <motion.span
          className={styles.navbar_icons_hover}
          whileHover={{ scale: 1.1 }}
        >
          {" "}
          <GiFullFolder size={iconSize} className={styles.navbar_icons_hover} />
        </motion.span>
      </div>
    </div>
  );
}
