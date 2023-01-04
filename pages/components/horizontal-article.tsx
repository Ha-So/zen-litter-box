import React from "react";
import styles from "../../styles/Home.module.scss";
import { motion } from "framer-motion";

export default function HorizontalArticle() {
  return (
    <div className={styles.sheet_container_horizontal}>
      <div className={styles.sheet_body}>Hello</div>
      <div className={styles.sheet_body}>Hello</div>
    </div>
  );
}
