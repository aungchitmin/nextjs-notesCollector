import dbConnect from "../../../libs/dbConnect";
import Note from "../../../models/Note";

async function handler(req, res) {
  const { method } = req
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        await Note.find();
        res.status(200).json({ success: true });
        //add data in response 
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        await Note.create(req.body); /* create a new model in the database */
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export default handler;
