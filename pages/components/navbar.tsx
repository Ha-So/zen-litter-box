import React, { useEffect, useState, useContext } from "react";
import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";
import { GiFullFolder, GiSunrise, GiSunset, GiNotebook } from "react-icons/gi";
import { MdOutlineMenuOpen, MdOutlineMenu } from "react-icons/md";
import {
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaArrowCircleDown,
  FaCat,
} from "react-icons/fa";
import { IoLogoNoSmoking } from "react-icons/io";
import { motion, useScroll, useSpring } from "framer-motion";

interface NavbarProps {
  width: number;
  theme: string;
  setTheme: (newTheme: string) => void;
  setShowMinushkaResult: (result: boolean) => void;
}

export default function Navbar({
  width,
  theme,
  setTheme,
  setShowMinushkaResult,
}: NavbarProps) {
  const iconSize = 40;
  const isMobile = width < 768;
  const [showMenu, setShowMenu] = useState(false);

  const handleMinushkaClick = () => {
    setShowMinushkaResult(true);
  };

  const handleThemeClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const variants = {
    open: { opacity: 1.0, x: 0, transition: { duration: 1 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 1 } },
  };

  return (
    <div className={styles.navbar_container_row}>
      <Link href="/">
        <h2 className={styles.navbar_container_column_title}>Zen Litter Box</h2>
      </Link>
      {isMobile && (
        <div className={styles.navbar_container_column_hamburger}>
          <motion.span
            whileHover={{ scale: 1.2 }}
            onClick={() => handleMenuClick()}
          >
            {showMenu ? (
              <MdOutlineMenuOpen size={iconSize} />
            ) : (
              <MdOutlineMenu size={iconSize} />
            )}
          </motion.span>
        </div>
      )}

      <motion.div
        className={styles.navbar_container_menu}
        animate={showMenu ? "open" : "closed"}
        variants={variants}
        initial={"closed"}
      >
        <div className={styles.navbar_container_menu_icon}>
          <motion.span whileHover={{ scale: 1.2 }}>
            <Link href="/notes">
              <GiNotebook size={iconSize} />
            </Link>
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.2 }}
            onClick={() => handleMinushkaClick()}
          >
            <FaCat size={iconSize} />
          </motion.span>
          <motion.span whileHover={{ scale: 1.2 }}>
            <a href="https://ha-so.github.io/home/">
              {" "}
              <GiFullFolder
                size={iconSize}
                className={styles.navbar_icons_hover}
              />
            </a>
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.2 }}
            onClick={() => handleThemeClick()}
          >
            {theme === "dark" && (
              <GiSunrise
                size={iconSize}
                className={styles.navbar_icons_hover_toggle}
              />
            )}
            {theme === "light" && (
              <GiSunset
                size={iconSize}
                className={styles.navbar_icons_hover_toggle}
              />
            )}
          </motion.span>
        </div>
      </motion.div>
      {!isMobile && (
        <div className={styles.navbar_container_column_icons}>
          <motion.span whileHover={{ scale: 1.2 }}>
            <Link href="/notes">
              <GiNotebook size={iconSize} />
            </Link>
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.2 }}
            onClick={() => handleMinushkaClick()}
          >
            <FaCat size={iconSize} />
          </motion.span>
          <motion.span whileHover={{ scale: 1.2 }}>
            <a href="https://ha-so.github.io/home/">
              {" "}
              <GiFullFolder
                size={iconSize}
                className={styles.navbar_icons_hover}
              />
            </a>
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.2 }}
            onClick={() => handleThemeClick()}
          >
            {theme === "dark" && (
              <GiSunrise
                size={iconSize}
                className={styles.navbar_icons_hover_toggle}
              />
            )}
            {theme === "light" && (
              <GiSunset
                size={iconSize}
                className={styles.navbar_icons_hover_toggle}
              />
            )}
          </motion.span>
        </div>
      )}
      <div className={styles.line} />
    </div>
  );
}
