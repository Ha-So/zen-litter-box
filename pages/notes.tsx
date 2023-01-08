import styles from "../styles/Notes.module.scss";
import NotesContents from "./components/notes/notes-contents";

export default function Notes() {
  return (
    <div className={styles.sheet_background}>
      <div className={styles.sheet_container}>
        <NotesContents />
      </div>
    </div>
  );
}
