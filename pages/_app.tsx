import "../styles/globals.scss";
import React, { useLayoutEffect } from "react";
import type { AppProps } from "next/app";
import useLocalStorage from "use-local-storage";

export default function App({ Component, pageProps }: AppProps) {
  // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", true ? "dark" : "light");

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
  return (
    <div data-theme={theme}>
      <Component {...pageProps} updateTheme={updateTheme} theme={theme} />
    </div>
  );
}
