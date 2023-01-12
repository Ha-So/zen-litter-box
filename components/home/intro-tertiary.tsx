import React, { useEffect } from "react";
import styles from "../../styles/Home.module.scss";
import { GiFullFolder, GiSunrise, GiNotebook } from "react-icons/gi";
import { FaCat } from "react-icons/fa";
import Footer from "../footer";
import { useInView } from "react-intersection-observer";

interface IntroProps {
  reference: any;
  setCurrentSection: (sectionIndex: number) => void;
}

export default function IntroTertiary({
  reference,
  setCurrentSection,
}: IntroProps) {
  const iconSize = 30;
  const sectionIndex = 2;
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setCurrentSection(sectionIndex);
    }
  }, [inView, setCurrentSection]);

  return (
    <div className={styles.sheet_body} ref={reference}>
      <div className={styles.intro_secondary_container}>
        <h2 className={styles.intro_tertiary_container_title} ref={ref}>
          Garden Legend
        </h2>
        <ul className={styles.space_list}>
          <li>
            <GiNotebook size={iconSize} /> - A collection of notes and
            interactions
          </li>
          <li>
            {" "}
            <FaCat size={iconSize} /> - My cat Minushka will dig the litter for
            a random treasure
          </li>
          <li>
            {" "}
            <GiFullFolder size={iconSize} /> - A portfolio of my work
          </li>
          <li>
            {" "}
            <GiSunrise size={iconSize} /> - Light/dark mode for the sake of your
            eyes
          </li>
        </ul>
        <Footer addBuffer={true} />
      </div>
    </div>
  );
}
