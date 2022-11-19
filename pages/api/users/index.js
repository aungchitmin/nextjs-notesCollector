import dbConnect from "../../../libs/dbConnect";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

async function handler(req, res) {
  const { name, email, password } = req.body;
  await dbConnect();
  console.log(name,email,password)
  
  //register

  // case "GET":
  //   try {
  //     await Note.find();
  //     res.status(200).json({ success: true });
  //     //add data in response
  //   } catch (error) {
  //     res.status(400).json({ success: false });
  //   }
  //   break;

  //try {
    const userExists = await User.findOne({ email });
    
    if (userExists) {
      console.log('user exists')
      res.status(400).json('user exists');
      //throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log('password hashed')
    //console.log(user);
    if (user) {
      console.log('user created')
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
      });
    } else {
      console.log('cannot create user')
      res.status(400).json('cannot created user');
      //throw new Error("invalid user data");
    }
  //} catch (error) {
  //   console.log('not run at all')
  //   res.status(400).json({ success: false });
  // }
}

export default handler;
