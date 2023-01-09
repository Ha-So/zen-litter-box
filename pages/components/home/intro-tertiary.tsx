import React from "react";
import styles from "../../../styles/Home.module.scss";
import { GiFullFolder, GiSunrise, GiNotebook } from "react-icons/gi";
import { FaCat } from "react-icons/fa";
import Footer from "../footer";

interface IntroProps {
  reference: any;
}

export default function IntroTertiary({ reference }: IntroProps) {
  const iconSize = 30;

  return (
    <div className={styles.sheet_body} ref={reference}>
      <div className={styles.intro_secondary_container}>
        <h2 className={styles.intro_secondary_container_title}>
          Garden Legend
        </h2>
        <ul className={styles.space_list}>
          <li>
            <GiNotebook size={iconSize} /> - A collection of notes, snippets and
            interactions
          </li>
          <li>
            {" "}
            <FaCat size={iconSize} /> - My cat Minushka will dig the litter box
            for a random treasure
          </li>
          <li>
            {" "}
            <GiFullFolder size={iconSize} /> - A portfolio of my work and
            experience
          </li>
          <li>
            {" "}
            <GiSunrise size={iconSize} /> - Light and dark mode for the sake of
            your eyes
          </li>
        </ul>
        <Footer />
      </div>
    </div>
  );
}
