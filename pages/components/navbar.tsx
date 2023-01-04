import React, { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.scss";
import { GiFullFolder, GiSunrise, GiSunset } from "react-icons/gi";
import { FaLongArrowAltDown, FaLongArrowAltUp, FaCat } from "react-icons/fa";
import { IoLogoNoSmoking } from "react-icons/io";
import { motion } from "framer-motion";

interface NavbarProps {
  width: number;
}

export default function Navbar({ width }: NavbarProps) {
  const iconSize = 40;
  const isMobile = width < 768;

  const getCurrentTheme = () => {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    return theme;
  };
  const handleOnClick = () => {
    console.log("on click");
  };
  return (
    <div className={styles.navbar_container_row}>
      {!isMobile && (
        <h2 className={styles.navbar_container_column_title}>Zen Litter Box</h2>
      )}
      <div className={styles.navbar_container_column_icons}>
        <motion.span
          className={styles.navbar_icons_hover}
          whileHover={{ scale: 1.2 }}
        >
          <FaLongArrowAltDown size={iconSize} />
        </motion.span>
        <motion.span whileHover={{ scale: 1.2 }}>
          <FaLongArrowAltUp size={iconSize} />
        </motion.span>
        <motion.span whileHover={{ scale: 1.2 }}>
          <FaCat size={iconSize} />
        </motion.span>
        <motion.span whileHover={{ scale: 1.2 }}>
          <GiFullFolder size={iconSize} className={styles.navbar_icons_hover} />
        </motion.span>
        {/* onClick={() => setColor()} */}
        <motion.span
          whileHover={{ scale: 1.2 }}
          onClick={() => handleOnClick()}
        >
          <IoLogoNoSmoking
            size={iconSize}
            className={styles.navbar_icons_hover}
          />
        </motion.span>
      </div>
      <div className={styles.line} />
    </div>
  );
}
