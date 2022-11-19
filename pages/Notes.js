import dbConnect from "../libs/dbConnect";
import Note from "../models/Note";
import FeedList from "../components/FeedList";
//import jwt from 'jsonwebtoken'


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
  //const jwt = require('jsonwebtoken')
  await dbConnect();
  // const query = context.params
  // console.log(query)
  let result = []
  try {
    //const user= jwt.verify(query, process.env.JWT_SECRET)
    //console.log(user)
    //result = await Note.find({user: user});
    result = await Note.find()
  } catch (error) {
    console.log('not run')
    console.log(error)
    
  }
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
