import { useRouter } from "next/router";
import db from "../../utils/db";
import { useScroll, motion } from "framer-motion";
import styles from "../../styles/Notes.module.scss";
import { MDXProvider } from "@mdx-js/react";
import Footer from "../../components/footer";
import React, { Suspense } from "react";
import notes from "../../files/index";

const Post = (props) => {
  const { entry } = props;
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const Blog = notes[String(entry?.slug).replace(/-/g, "")];

  if (router.isFallback) {
    return <div>loading</div>;
  } else {
    if (entry) {
      return (
        <div>
          <div className={styles.sheet_background}>
            <div className={styles.sheet_container_mdx}>
              <motion.div
                className={styles.progress_bar}
                style={{ scaleX: scrollYProgress }}
              />
              <div className={styles.sheet_body_mdx}>
                {/* <Markdown>{postContent}</Markdown> */}
                <Suspense fallback={<div>Hi, This page is Loading...</div>}>
                  <section>
                    <MDXProvider>
                      <Blog />
                    </MDXProvider>
                  </section>
                </Suspense>
                {/* {entry?.slug == "about-this-garden" ? <About /> : <Magic />} */}
                {/* <h2>{entry.title}</h2>
                  <p>{entry.body}</p>
                  <a href={entry.id}>{entry.id}</a>
                  {body} */}
                <Footer addBuffer={true} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>not found</div>;
    }
  }
};

export const getStaticPaths = async () => {
  const entries = await db.collection("entries").get();
  const paths = entries.docs?.map((entry) => ({
    params: {
      slug: entry.data().slug,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const res = await db.collection("entries").where("slug", "==", slug).get();
  const entry = res.docs?.map((entry) => ({
    ...entry.data(),
    id: entry.id,
    created: null,
  }));
  if (entry.length) {
    return {
      props: {
        entry: entry[0],
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default Post;
