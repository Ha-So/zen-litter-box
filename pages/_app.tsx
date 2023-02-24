import "../styles/globals.scss";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import useLocalStorage from "use-local-storage";
import Navbar from "../components/navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";

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

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Hide splash screen shen we are server side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);

  return (
    <div data-theme={theme}>
      <Head>
        <title>Zen Litter Box</title>
        <meta name="description" content="My digital garden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
          rel="preload"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
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
