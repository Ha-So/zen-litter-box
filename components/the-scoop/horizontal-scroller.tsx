import React from "react";
import styles from "../../styles/Scroller.module.scss";

export interface NotesContentsProps {
  children: [];
}
function HorizontalScroller({ children }: NotesContentsProps) {
  return <div className={styles.scroller_container}>{children}</div>;
}

export default HorizontalScroller;
