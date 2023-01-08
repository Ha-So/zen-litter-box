import { collection, DocumentData, getDocs } from "firebase/firestore/lite";
import db from "../../firebase/firebase.config";

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);

//   // Returns an array that looks like this:
//   // [
//   //   {
//   //     params: {
//   //       id: 'ssg-ssr'
//   //     }
//   //   },
//   //   {
//   //     params: {
//   //       id: 'pre-rendering'
//   //     }
//   //   }
//   // ]
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ''),
//       },
//     };
//   });
// }
  
export async function fetchNotes (notes: any, setNotes: ([])=> void) {
    const response = collection(db, "notes");
    const data = await getDocs(response);
    let itemsToAdd: DocumentData[] = [];
    data.docs.forEach((item) => {
      console.log(item);
      itemsToAdd.push(item.data());
    });
    setNotes([...notes, ...itemsToAdd]);
  };