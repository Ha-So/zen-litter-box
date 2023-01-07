import firebase from "../firebase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";
import NotesFetch from "./api/notes";

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
    <div>
      <NotesFetch />
    </div>
  );
}
