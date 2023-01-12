import "../styles/globals.scss";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import useLocalStorage from "use-local-storage";
import Navbar from "../components/navbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", true ? "dark" : "light");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, [setTheme]);

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
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

  return (
    <div data-theme={theme}>
      <Head>
        <title>Zen Litter Box</title>
      </Head>
      <Navbar width={width} setTheme={updateTheme} theme={theme} />
      <Component
        {...pageProps}
        updateTheme={updateTheme}
        theme={theme}
        width={width}
      />
    </div>
  );
}
