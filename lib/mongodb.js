require("dotenv").config();
import mongoose from "mongoose";

let isConnected = false;

export const mongodbConnect = async () => {
  try {
    if (!process.env.NEXT_PUBLIC_MONGODB_URL) {
      console.log(process.env.NEXT_PUBLIC_MONGODB_URL)
      console.error("Mongodb url is missing");
      return false;
    }

    if (isConnected) {
      console.error("Mongodb is already connected");
      return false;
    } else {
      try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL);
        console.log("Mongodb connected !");
      } catch (err) {
        throw new Error(err);
      }
    }
  } catch (err) {
    console.error(err);
  }
};
