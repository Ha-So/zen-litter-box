import React, { useEffect, useState, useContext } from "react";
import styles from "../../styles/Navbar.module.scss";
import { GiFullFolder, GiSunrise, GiSunset } from "react-icons/gi";
import { FaLongArrowAltDown, FaLongArrowAltUp, FaCat } from "react-icons/fa";
import { IoLogoNoSmoking } from "react-icons/io";
import { motion } from "framer-motion";

interface NavbarProps {
  width: number;
  theme: string;
  setTheme: (newTheme: string) => void;
}

export default function Navbar({ width, theme, setTheme }: NavbarProps) {
  const [rootColor, setRootColor] = useState("dark");
  const iconSize = 40;
  const isMobile = width < 768;

  const handleClick = () => {
    console.log("on click");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // setRootColor("light");
    // const root = document.querySelector(":root");
    // root.setAttribute("color-scheme", rootColor);
    // console.log(rootColor);
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
        <motion.span whileHover={{ scale: 1.2 }} onClick={() => handleClick()}>
          <IoLogoNoSmoking
            size={iconSize}
            className={styles.navbar_icons_hover_toggle}
          />
        </motion.span>
      </div>
      <div className={styles.line} />
    </div>
  );
}
