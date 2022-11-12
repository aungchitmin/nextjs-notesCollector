import dbConnect from "../libs/dbConnect";
import Note from "../models/Note";
import FeedList from "../components/FeedList";

export default function App({ notes }) {
  const allnotes = notes.sort((item1, item2) => {
    const date1 = new Date(item1.createdAt);
    const date2 = new Date(item2.createdAt);
    return date2 - date1;
  });

  return (
    <>
      <FeedList data={allnotes} />
    </>
  );
}

export async function getStaticProps() {
  await dbConnect();

  const result = await Note.find();

  // const notes = result.map((doc) => {
  //   const note = doc.toObject();
  //   note._id = note._id.toString();
  //   note.createdAt = note.createdAt.toString();
  //   note.updatedAt = note.updatedAt.toString();
  //   return note;
  // });

  const notes = result.map((item) => {
    return {
      title: item.title,
      link: item.link,
      type: item.type,
      description: item.description,
      id: item._id.toString(),
      createdAt: item.createdAt.toString(),
      updatedAt: item.updatedAt.toString(),
    };
  });
  return { props: { notes: notes }, revalidate: 1 };
}
