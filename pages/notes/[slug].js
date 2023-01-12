import { useRouter } from "next/router";
import db from "../../utils/db";
import { useScroll, motion } from "framer-motion";
import styles from "../../styles/Notes.module.scss";

const Post = (props) => {
  const { entry } = props;
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  if (router.isFallback) {
    return <div>loading</div>;
  } else {
    if (entry) {
      return (
        <div>
          <div className={styles.sheet_background}>
            <div className={styles.sheet_container}>
              <motion.div
                className={styles.progress_bar}
                style={{ scaleX: scrollYProgress }}
              />
              <div className={styles.sheet_body}>
                {/* <ReactMarkdown children={markDownText} remarkPlugins={[remarkGfm]} /> */}
                <div>
                  <h2>{entry.title}</h2>
                  <p>{entry.body}</p>
                  <a href={entry.id}>{entry.id}</a>
                </div>
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
  const paths = entries.docs.map((entry) => ({
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
  const entry = res.docs.map((entry) => ({
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
