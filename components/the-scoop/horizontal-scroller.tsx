export {};

// import React, { useRef } from "react";
// import styles from "../../styles/Scroller.module.scss";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// export interface NotesContentsProps {
//   children: Element[];
// }
// function HorizontalScroller({ children }: NotesContentsProps) {
//   const iconSize = 30;
//   const sideScroll = (
//     element: HTMLDivElement | null,
//     speed: number,
//     distance: number,
//     step: number
//   ) => {
//     let scrollAmount = 0;
//     const slideTimer = setInterval(() => {
//       element.scrollLeft += step;
//       scrollAmount += Math.abs(step);
//       if (scrollAmount >= distance) {
//         clearInterval(slideTimer);
//       }
//     }, speed);
//   };

//   const contentWrapper = useRef(null);

//   return (
//     <span className={styles.scroller_edge}>
//       <div
//         className={styles.scroller_left_arrow}
//         onClick={() => {
//           sideScroll(contentWrapper?.current, 500, 20, -300);
//         }}
//       >
//         <FaArrowCircleLeft size={iconSize} />
//       </div>
//       <div ref={contentWrapper} className={styles.scroller_container}>
//         {children}
//       </div>
//       <div
//         className={styles.scroller_right_arrow}
//         onClick={() => {
//           sideScroll(contentWrapper.current, 500, 20, 300);
//         }}
//       >
//         <FaArrowCircleRight size={iconSize} />
//       </div>
//     </span>
//   );
// }

// export default HorizontalScroller;
