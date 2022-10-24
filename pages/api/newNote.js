import { MongoClient } from "mongodb";

//api/newNote

async function handler(req, res) {
  if (req.method === "POST") {
    const data = {...req.body, createdAt: Date.now()};

    //const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://useracm:ksmn@cluster0.xpdymqp.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const noteCollection = db.collection("infoCollection");

    const result = await noteCollection.insertOne(data);

    //console.log(result);

    client.close();

    res.status(201).json({ message: "info inserted." });
  }
}

export default handler;
