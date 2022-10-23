import { MongoClient } from "mongodb";
import FeedList from "../components/FeedList";
//import Hero from "../components/Hero";

export default function App(props) {
  return (
    <>
      
      <FeedList data={props.allinfo} />
    </>
  );
}


export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://useracm:ksmn@cluster0.xpdymqp.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const noteCollection = db.collection("infoCollection");
  const data = await noteCollection.find().toArray();

  client.close();

  return {
    props: {
      allinfo: data.map((item) => ({
        title: item.title,
        description: item.description,
        id: item._id.toString(),
      })),
      },
    revalidate: 1,
  };
}
