"use server";

import { mongodbConnect } from "./mongodb";
import Link from "../database/link.model";

export const getOriginalLink = async (shortLink) => {
  await mongodbConnect();
  try {
    const originalLink = await Link.find({ shortLink: shortLink });
    return originalLink[0].originalLink;
  } catch (err) {
    console.error(err);
  }
};
