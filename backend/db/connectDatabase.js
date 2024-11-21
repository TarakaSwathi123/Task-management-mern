import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to database");
  } catch (error) {
    console.error(`"Error ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
