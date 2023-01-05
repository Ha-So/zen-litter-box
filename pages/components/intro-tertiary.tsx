import React from "react";
import styles from "../../styles/Home.module.scss";
import { GiFullFolder, GiSunrise, GiSunset, GiNotebook } from "react-icons/gi";
import {
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaArrowCircleDown,
  FaCat,
} from "react-icons/fa";
import { AiOutlineUp } from "react-icons/ai";
import { motion } from "framer-motion";

import { IoLogoNoSmoking } from "react-icons/io";

export default function IntroTertiary({ reference, scrollReference }) {
  const iconSize = 30;
  const scroll = () => {
    //amount to scroll is negative to scroll up
    console.log("scroll");
    scrollReference?.current.scrollIntoView();
  };
  return (
    <div className={styles.sheet_body} ref={reference}>
      <div className={styles.intro_tertiary_container}>
        <h2 className={styles.intro_tertiary_title}>Menu Legend</h2>

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
      </div>
    </div>
  );
}
