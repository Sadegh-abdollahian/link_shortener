"use server";

import { mongodbConnect } from "../mongodb";
import Link from "../../database/link.model";

export async function createLink(originalLink, shortLink, userId) {
  try {
    mongodbConnect();

    await Link.create({
      userId: userId,
      originalLink: originalLink,
      shortLink: shortLink,
      createdAt: new Date(),
    });
  } catch (err) {
    console.error(err);
  }
}
