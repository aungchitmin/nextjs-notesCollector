import mongoose from "mongoose";
// import dotenv from 'dotenv'
// dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI;

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log("mongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default dbConnect;
