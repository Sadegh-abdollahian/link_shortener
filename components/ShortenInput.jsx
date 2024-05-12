"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mongodbConnect } from "@/lib/mongodb";

const ShortenInput = () => {
  const [url, setUrl] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(url);
  };

  return (
    <div className="background-gray flex h-[66px] items-center justify-between rounded-full border-4 border-[#353C4A] p-1">
      <div className="flex w-full items-center justify-center gap-x-5 max-sm:gap-x-3">
        <FontAwesomeIcon icon={faLink} size="lg" style={{ color: "#C9CED6" }} />
        <Input
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter the link here"
          className="background-gray basic-16-normal max-sm:small-13-normal w-[500px] border-none text-[#C9CED6] caret-[#EB568E] placeholder:text-[#C9CED6] focus-visible:ring-0 focus-visible:ring-offset-0 max-md:w-9/12 max-sm:w-8/12"
        />
      </div>
      <Button
        type="submit"
        onClick={handleSubmit}
        className="bg-primary-blue basic-16-normal box-shadow h-[50px] min-w-[50px] rounded-full text-white focus:bg-[#113eb0]"
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          size="lg"
          style={{ color: "#C9CED6" }}
        />
      </Button>
    </div>
  );
};

export default ShortenInput;
