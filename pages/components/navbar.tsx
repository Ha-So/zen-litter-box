import React, { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";
import { GiFullFolder, GiSunrise, GiSunset, GiNotebook } from "react-icons/gi";
import { MdOutlineMenuOpen, MdOutlineMenu } from "react-icons/md";
import { FaCat } from "react-icons/fa";
import { motion } from "framer-motion";
import { getTotalNotes } from "../../firebase/notes-store";
import { useRouter } from "next/router";

interface NavbarProps {
  width: number;
  theme: string;
  setTheme: (newTheme: string) => void;
}

export default function Navbar({ width, theme, setTheme }: NavbarProps) {
  const iconSize = 40;
  const isMobile = width < 768;
  const [showMenu, setShowMenu] = useState(false);

  const handleMinushkaClick = async () => {
    await returnRandomPage();
    setShowMinushkaResult(true);
  };

  const handleThemeClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const getRandomArbitrary = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const [showMinushkaResult, setShowMinushkaResult] = useState(false);

  const variantsMinush = {
    open: { opacity: 1.0, y: 0, transition: { duration: 0.6 } },
    closed: { opacity: 0, y: "-200%", transition: { duration: 0.6 } },
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowMinushkaResult(false);
  //   }, 3000);
  // }, [showMinushkaResult]);

  const variants = {
    open: { opacity: 1.0, x: 0, transition: { duration: 2 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 2 } },
  };
  const router = useRouter();
  const returnRandomPage = async () => {
    const total = await getTotalNotes();
    router.push("/notes/" + getRandomArbitrary(1, 3));
  };

  return (
    <div className={styles.navbar_container_row}>
      <Link href="/">
        <motion.h2
          whileHover={{ scale: 1.2 }}
          className={styles.navbar_container_column_title}
        >
          Zen Litter Box
        </motion.h2>
      </Link>
      <motion.div
        animate={showMinushkaResult ? "open" : "closed"}
        variants={variantsMinush}
        initial={"closed"}
        className={styles.sheet_modal}
        onAnimationComplete={() =>
          setTimeout(() => {
            setShowMinushkaResult(false);
          }, 1000)
        }
      >
        Minushka found something!
      </motion.div>
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
            onClick={() => (!showMinushkaResult ? handleMinushkaClick() : null)}
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
