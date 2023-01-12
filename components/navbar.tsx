import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { GiFullFolder, GiSunrise, GiSunset, GiNotebook } from "react-icons/gi";
import { MdOutlineMenuOpen, MdOutlineMenu } from "react-icons/md";
import { FaCat } from "react-icons/fa";
import { motion } from "framer-motion";
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
  const [minushMessage, setMinushMessage] = useState(
    "Minushka is currently napping!"
  );
  const [showMinushkaResult, setShowMinushkaResult] = useState(false);
  const [notes, setNotes] = useState();

  const router = useRouter();

  // useEffect(() => {
  //   async function fetchData() {
  //     console.log("res1");
  //     const res = await fetch("http://localhost:3000/api/entry");
  //     const data = await res.json();
  //     console.log("res", res);
  //     setNotes(data);
  //   }
  //   fetchData();
  // }, []);
  const handleMinushkaClick = async () => {
    console.log("notes1", notes);
    // const total = await getTotalNotes();
    // const total = 1;
    // const data = 1;
    // const randomInt = getRandomArbitrary(1, total);
    // const data = await getSpecificTitle(randomInt.toString());
    // setMinushMessage(result ? result?.title : "Minushka is currently napping!");
    // router.push("/notes/" + result?.title);
    setShowMinushkaResult(true);
    setTimeout(() => {
      setShowMinushkaResult(false);
    }, 2000);
  };

  const handleThemeClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const variantsMinush = {
    open: { opacity: 1.0, y: 0, transition: { duration: 0.6 } },
    closed: { opacity: 0, y: "-200%", transition: { duration: 0.6 } },
  };
  const variants = {
    open: { opacity: 1.0, x: 0, transition: { duration: 1 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 1 } },
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
            onClick={async () =>
              !showMinushkaResult ? await handleMinushkaClick() : null
            }
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
