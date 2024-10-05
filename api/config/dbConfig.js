import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(`${process.env.MONGO_URI}/ducat`);
    console.log("DB connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
