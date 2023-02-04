import style from "../../styles/Cards.module.scss";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import AxiosImage from "../../public/card-images/axios.png";
import Image from "next/image";

interface Props {
  hueA: number;
  hueB: number;
  cardImage: string;
  cardText: string;
  isMobile: boolean;
  linkRef?: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0.0,
  },
  onscreen: {
    y: 50,
    rotate: -10,

    rotateY: 0,
    opacity: 1.0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  openInfo: {
    y: -100,
    rotate: 0,
    rotateY: 180,
    opacity: 1.0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const cardVariantsMobile: Variants = {
  offscreen: {
    y: 300,
    opacity: 0.0,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    opacity: 1.0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  openInfo: {
    y: -100,
    rotate: 0,
    opacity: 1.0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const paragraphVariants: Variants = {
  normal: {
    rotateY: 0,
  },
  invert: {
    rotateY: 180,
  },
};

const paragraphVariantsMobile: Variants = {
  normal: {
    rotateY: 0,
  },
  invert: {
    rotateY: 0,
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

export const Card = ({
  hueA,
  hueB,
  cardImage,
  cardText,
  isMobile,
  linkRef,
}: Props) => {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  const imageSize = 100;
  const [openInfo, setOpenInfo] = useState(false);
  const [disableClick, setDisableClick] = useState(false);

  const onClickHandle = () => {
    setOpenInfo(!openInfo);
    setDisableClick(true);
    setTimeout(() => {
      setDisableClick(false);
    }, 800);
  };
  return (
    <>
      {/* {openInfo && (
        <div
          className={style["card_full-screen"]}
          onClick={() => onClickHandle()}
        >
          <p className={style["card_description"]}>{cardText}</p>
        </div>
      )} */}

      <motion.div
        className={style["card-container"]}
        initial="offscreen"
        whileInView={openInfo ? "openInfo" : "onscreen"}
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className={style["splash"]} style={{ background }} />
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={style["card"]}
          variants={!isMobile ? cardVariants : cardVariantsMobile}
          onClick={() => (disableClick ? null : onClickHandle())}
        >
          {!openInfo && cardImage && (
            <Image
              alt=""
              src={cardImage}
              height={imageSize}
              width={imageSize}
              className={style.card_image}
            />
          )}
          {!openInfo && !cardImage && (
            <h2 className={style.card_title}>Amaya & Ko</h2>
          )}
          {openInfo && (
            <motion.p
              initial="normal"
              animate={openInfo ? "invert" : "normal"}
              variants={isMobile ? paragraphVariantsMobile : paragraphVariants}
              className={style.card_description}
            >
              {cardText}
              <a
                href={linkRef}
                rel="noreferrer"
                className={style.card_link}
                target="_blank"
              >
                Check it out
              </a>
              .
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};
