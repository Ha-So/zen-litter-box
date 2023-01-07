import db from "../../firebase/firebase.config";
import { collection, DocumentData, getDocs } from "firebase/firestore/lite";
import React, { useState, useEffect } from "react";

function notesFetch() {
  const [notes, setNotes] = useState<DocumentData[]>([]);
  const fetchNotes = async () => {
    const response = collection(db, "notes");
    const data = await getDocs(response);
    data.docs.forEach((item) => {
      setNotes([...notes, item.data()]);
    });
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {notes &&
          notes.map((blog) => {
            return (
              <div className="blog-container">
                <h4>{blog.title}</h4>
                <p>{blog.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default notesFetch;
