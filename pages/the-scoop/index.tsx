import Head from "next/head";
import { useEffect, useState, useLayoutEffect, useRef, use } from "react";
import styles from "../../styles/Home.module.scss";

export default function TheScoop() {
  return (
    <div className={styles.sheet_background}>
      {/* <Coffee /> */}
      <div className={styles.sheet_container}>The scoop</div>
    </div>
  );
}
