import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../utils/useFollowPointer";
import styles from "../styles/Home.module.scss";

export default function Pointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className={styles.pointer_box}
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
}
