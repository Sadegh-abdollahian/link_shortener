import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Generate a unique hash using the current time and a random string
 * @returns {string} The hash string
 */
export function generateHash() {
  // Current time in milliseconds as a string
  const currentTime = Date.now().toString();
  // Random 10-byte hex string
  const randomBytes = crypto.randomBytes(4).toString("hex");
  // Create a SHA-256 hash of the current time and random string
  const hash = crypto
    .createHash("sha256")
    .update(currentTime + randomBytes)
    .digest("hex").slice(0, 7);
  // Return the hash string
  return hash;
}
