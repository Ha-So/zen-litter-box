import styles from "../../styles/Md.module.scss";
import { CopyBlock, anOldHope } from "react-code-blocks";
import Link from "next/link";
import code from "./codeblocks.js";

export default function Magic() {
  return (
    <article>
      <div>
        <h2 className={styles.md_header}>magic of markdown</h2>
        <p>
          I thought "you know what would be neat, if I stored MDX files in my
          firestore database and dynamically pulled them for each page." Sounds
          simple right? I struggled more than I care to admit on this one. That
          said, you are currently reading this from an mdx file! 😅
        </p>
        <h2>problem</h2>
        <br />
        <CopyBlock
          text={code["npmError"]}
          language={"jsx"}
          theme={anOldHope}
          wrapLines={true}
        />
        <p>
          A framework like Next.js attempts to shove the mess of wires behind
          the desk, which is awesome for easy development. However, in cases
          like this that abstraction can cause issues when you need to customize
          your application, like the need to open MDX files. Here we are missing
          the webpack loader neccesary to convert the mdx files to an output in
          JavaScript.
        </p>
        <h2>solution</h2>
        <p>
          After researching through all kinds of solutions, the answer was in
          the Next.js docs all along. Who would have thought?
        </p>
        <h4>1. Install the @next/mdx package and mdx loader</h4>
        <CopyBlock
          text={code["nextMdx"]}
          language={"jsx"}
          theme={anOldHope}
          wrapLines={true}
        />
        <h4>
          2. Update your next.config.js to require the package and support .mdx
          pages
        </h4>
        <CopyBlock
          text={code["nextConfig"]}
          language={"jsx"}
          theme={anOldHope}
          wrapLines={true}
        />
        <h4>3. You can now create MDX pages!</h4>
        <CopyBlock
          text={code["mdxPages"]}
          language={"jsx"}
          theme={anOldHope}
          wrapLines={true}
        />
        <p>
          But don't take my word for it, check out the detailed solution{" "}
          <a
            className={styles.md_link}
            href="https://nextjs.org/docs/advanced-features/using-mdx"
          >
            here
          </a>
          .
        </p>
      </div>
    </article>
  );
}
