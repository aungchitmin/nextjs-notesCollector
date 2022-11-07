import { MongoClient } from "mongodb";

async function handler(req, res) {

  if (req.method === "GET") {
    

    const {catFetcher} = req.query;
    //get id, api/notes/theID

    const client = await MongoClient.connect(
      "mongodb+srv://useracm:ksmn@cluster0.xpdymqp.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const noteCollection = db.collection("infoCollection");

    const result = await noteCollection.find({type: catFetcher}).toArray();

    const data = result.map(item => ({
        title: item.title,
        description: item.description,
        type:item.type,
        link:item.link,
        createdAt: item.createdAt,
        id: item._id.toString(),
    }))
    client.close();
    res.status(200).json(data)

    
  }
}

export default handler;
