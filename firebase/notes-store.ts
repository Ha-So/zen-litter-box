import { collection, DocumentData, getDocs } from "firebase/firestore/lite";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import db from "../firebase/firebase.config";

export async function getAllNotes() {
    const response = collection(db, "notes");
    const data = await getDocs(response);
    let itemsToAdd: DocumentData[] = [];
    data.docs.forEach((item) => {
      // console.log(item);
      itemsToAdd.push(item.data());
    });
    const stars = itemsToAdd.map((fileName) => {
    return {
        title: fileName.title.replace(/\s+/g, '-').toLowerCase(),
        id: fileName.id,
        body: fileName.body,
   
    };
  });
  const jsonData = { stars };
  return jsonData;
}

export async function getMDFile() {
const storage = getStorage();
getDownloadURL(ref(storage, '1.md'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    // const img = document.getElementById('myimg');
    // img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
}
  
export async function fetchNotes (notes: any, setNotes: ([])=> void) {
    const response = collection(db, "notes");
    const data = await getDocs(response);
    let itemsToAdd: DocumentData[] = [];
    data.docs.forEach((item) => {
      // console.log(item);
      itemsToAdd.push(item.data());
    });
    setNotes([...notes, ...itemsToAdd]);
  };