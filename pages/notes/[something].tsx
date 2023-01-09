import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs/promises";
import jsonData from "../../back-end-data/some-backend-data.json";
import { fetchNotes, getAllNotes, getMDFile } from "../../firebase/notes-store";
import { Timestamp } from "firebase/firestore/lite";

interface starInterface {
  title: string;
  id: string;
  body: string;
}

async function getData() {
  const filePath = path.join(
    process.cwd(),
    "back-end-data",
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

  if (props.hasError) {
    return <h1>Error - please try another parameter</h1>;
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const test = getMDFile();
  console.log("test", test);
  return (
    <div>
      <h1>{props.specificStarData.title}</h1>
      <p>{props.specificStarData.body}</p>
      <a href={props.specificStarData.id}>More Information here (link)</a>
    </div>
  );
}

export default projectPage;
