import styles from "../styles/Home.module.scss";
import { useCollection } from "react-firebase-hooks/firestore";
import NotesFetch from "./api/notes";
import NotesContents from "./components/notes/notes-contents";

export default function Notes() {
  // Destructure user, loading, and error out of the hook.
  //   const [user, loading, error] = useAuthState(firebase.auth());

  //   const [notes, notesLoading, notesError] = useCollection(
  //     firebase?.firestore().collection("notes"),
  //     {}
  //   );

  //   if (!notesLoading && notes) {
  //     notes.docs.map((doc: any) => console.log(doc.data()));
  //   }

  return (
    <div className={styles.sheet_background}>
      <div className={styles.sheet_container}>
        <NotesContents />
      </div>
    </div>
  );
}
