import React from "react";
import styles from "../../styles/Home.module.scss";

export default function sheet() {
  return (
    <div className={styles.sheet_intro}>
      {" "}
      <div className="intro">
        <h1 className="intro-header">Hi.</h1>
        <br></br>
        <p className={styles.paragraph_breaks_intro}>
          My name is Haris. This is my zen litter box. A collection of thoughts,
          things I learned that should be shared and other random assortments.
          <p>
            If you can't tell by the name, we don't take ourselves too seriously
            here.
            <br />
            Welcome.
          </p>
        </p>
      </div>
    </div>
  );
}
