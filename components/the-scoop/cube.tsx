import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Scroller.module.scss";

export const Cube = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      <motion.div className={styles["drag-area"]} ref={constraintsRef} />
      <motion.div drag dragConstraints={constraintsRef} />
    </>
  );
};
