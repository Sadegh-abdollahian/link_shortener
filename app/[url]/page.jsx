"use client";

import { getOriginalLink } from "@/lib/redirectToLink";
import React, { useEffect } from "react";

const Page = ({ params }) => {
  const { url } = params;

  useEffect(() => {
    const getLongLink = async () => {
      try {
        const longUrl = await getOriginalLink(url);
        if (longUrl) {
          window.location.href = longUrl;
        }
      } catch (err) {
        console.error(err);
      }
    };
    getLongLink();
  }, []);

  return (
    <div className="background-black flex-center min-h-screen">
      <p className="title-24-normal text-light max-md:basic-16-normal max-sm:small-13-normal">
        Redirecting you to the link, Please wait ...
      </p>
    </div>
  );
};

export default Page;
