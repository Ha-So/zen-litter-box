import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";
import React, { useLayoutEffect, useEffect, useState } from "react";
import type { AppProps } from "next/app";
import useLocalStorage from "use-local-storage";
import Navbar from "./components/navbar";
import { motion } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", true ? "dark" : "light");
  const [width, setWidth] = useState(0);
  const [showMinushkaResult, setShowMinushkaResult] = useState(false);

  useLayoutEffect(() => {
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  const variants = {
    open: { opacity: 0.9, y: 0, transition: { duration: 1 } },
    closed: { opacity: 0, y: "-100%", transition: { duration: 1 } },
  };

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  useEffect(() => {
    setTimeout(() => {
      setShowMinushkaResult(false);
    }, 4000);
  }, [showMinushkaResult]);

  return (
    <div data-theme={theme}>
      <Navbar
        width={width}
        setTheme={updateTheme}
        theme={theme}
        setShowMinushkaResult={setShowMinushkaResult}
      />
      <Component
        {...pageProps}
        updateTheme={updateTheme}
        theme={theme}
        width={width}
      />
      <motion.div
        animate={showMinushkaResult ? "open" : "closed"}
        variants={variants}
        initial={"closed"}
        className={styles.sheet_modal}
      >
        Minushka is napping!
      </motion.div>
    </div>
  );
}
