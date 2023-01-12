import db from "../../utils/db";

export default async (req, res) => {
  try {
    const entries = await db.collection("entries").orderBy("created").get();
    console.log(entries);
    const entriesData = entries.docs.map((entry) => ({
      ...entry.data(),
      id: entry.id,
      created: null,
    }));
    res.status(200).json({ entriesData });
  } catch (e) {
    res.status(400).end();
  }
};
