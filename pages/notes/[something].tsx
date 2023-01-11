import { GetStaticProps, GetStaticPaths } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs/promises";
import styles from "../../styles/Notes.module.scss";
import jsonData from "../../backend-data/some-backend-data.json";
import { fetchNotes, getAllNotes, getMDFile } from "../../firebase/notes-store";
import { Timestamp } from "firebase/firestore/lite";
import { motion, useScroll, useUnmountEffect } from "framer-motion";
import ReactMarkdown from "react-markdown";
import test from "../../backend-data/1.md";
import remarkGfm from "remark-gfm";

interface starInterface {
  title: string;
  id: string;
  body: string;
}

async function getData() {
  const filePath = path.join(
    process.cwd(),
    "backend-data",
    "some-backend-data.json"
  );
  const fileData = await fs.readFile(filePath);
  const data = await getAllNotes();
  return data;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const itemID = context.params?.something;
  const data = await getData();
  const foundItem = data.stars.find(
    (item: starInterface) => itemID === item.id
  );

  if (!foundItem) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      specificStarData: foundItem,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();
  const pathsWithParams = data.stars.map((star: starInterface) => ({
    params: { something: star.id },
  }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

function projectPage(props: {
  specificStarData: starInterface;
  hasError: boolean;
}) {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const [markDownText, setMarkDownText] = useState("");
  useEffect(() => {
    fetch(test)
      .then((res) => res.text())
      .then((text) => setMarkDownText(text));
  });
  if (props.hasError) {
    return <h1>Error - please try another parameter</h1>;
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={styles.sheet_background}>
      <div className={styles.sheet_container}>
        <motion.div
          className={styles.progress_bar}
          style={{ scaleX: scrollYProgress }}
        />
        <div className={styles.sheet_body}>
          <ReactMarkdown children={markDownText} remarkPlugins={[remarkGfm]} />
          {/* <div>
            <h2>{props.specificStarData.title}</h2>
            <p>{props.specificStarData.body}</p>
            <a href={props.specificStarData.id}>More Information here (link)</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default projectPage;
