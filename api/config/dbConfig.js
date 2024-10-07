import { connect } from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI environment variable is not defined.");
  }

  try {
    await connect(`${process.env.MONGO_URI}/ducat`);
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection error:", error.message);
    throw error; // Re-throw the error to handle it in the main server file
  }
};

export default connectDB;
