"use server";

import { mongodbConnect } from "./mongodb";
import Link from "../database/link.model";

export const getUserLinks = async (userId) => {
  await mongodbConnect();
  try {
    const userLinks = await Link.find({ userId: userId });
    return userLinks;
  } catch (err) {
    console.error(err);
  }
};
