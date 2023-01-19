import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { GiFullFolder, GiSunrise, GiSunset, GiNotebook } from "react-icons/gi";
import { MdOutlineMenuOpen, MdOutlineMenu } from "react-icons/md";
import { FaCat } from "react-icons/fa";
import { motion, useUnmountEffect } from "framer-motion";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";

interface NavbarProps {
  width: number;
  theme: string;
  setTheme: (newTheme: string) => void;
}

export default function Navbar({ width, theme, setTheme }: NavbarProps) {
  const iconSize = 40;
  const isMobile = width < 768;
  const [showMenu, setShowMenu] = useState(false);
  const [minushMessage, setMinushMessage] = useState(
    "Minushka is currently napping!"
  );
  const [showMinushkaResult, setShowMinushkaResult] = useState(false);
  const [notes, setNotes] = useState<any[]>([]);
  const [randomIndex, setRandomIndex] = useState(-1);

  const router = useRouter();

  const updateRandomIndex = () => {
    let newRandomIndex = getRandomArbitrary(0, notes.length - 1);
    while (newRandomIndex === randomIndex) {
      newRandomIndex = getRandomArbitrary(0, notes.length - 1);
    }
    setRandomIndex(newRandomIndex);
  };

  useEffect(() => {
    fetch("/api/entries")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data.entriesData);
        updateRandomIndex();
      });
  }, []);

  const handleMinushkaClick = () => {
    const currentPath = router.asPath.split("#")[0].split("?")[0];
    if (currentPath === "/notes/" + notes[randomIndex]?.slug) {
      setMinushMessage(
        "Minushka already dug up " + notes[randomIndex]?.title + "!"
      );
    } else {
      setMinushMessage("Minushka dug up " + notes[randomIndex]?.title + "!");
      search();
      router.push("/notes/" + notes[randomIndex]?.slug);
    }
    updateRandomIndex();
    setShowMinushkaResult(true);
    setTimeout(() => {
      setShowMinushkaResult(false);
    }, 3000);
  };

  const getRandomArbitrary = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleThemeClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const search = () => {
    ga.event({
      action: "minushka button",
      params: {
        search_term: minushMessage,
      },
    });
  };

  const variantsMinush = {
    open: { opacity: 1.0, y: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, y: "-400%", transition: { duration: 0.5 } },
  };
  const variants = {
    open: { opacity: 1.0, x: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.5 } },
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
      >
        {minushMessage}
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
      )}
      <div className={styles.line} />
    </div>
  );
}
