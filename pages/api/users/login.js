import dbConnect from "../../../libs/dbConnect";
import User from "../../../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

async function handler(req, res) {
  const { method } = req;
  const { email, password } = req.body;
  //console.log(email,password)
  await dbConnect();

  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  };

  switch (method) {
    // case "GET":
    //   try {
    //     await Note.find();
    //     res.status(200).json({ success: true });
    //     //add data in response
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;
    case "POST":
      try {
        //console.log('arrived here')
        const user = await User.findOne({ email });
        
        if (user && (await bcrypt.compare(password, user.password))) {
          
          res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
          });
        } else {
          console.log('not run')
          res.status(400).json({ success: false });
          //throw new Error("invalid credentials");
        }
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
