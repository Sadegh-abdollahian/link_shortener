import Navbar from "@/components/Navbar";
import bg from "../../../public/assets/images/background.png";
import "../../globals.css";
import ShortenInput from "@/components/ShortenInput";
import HistoryTable from "@/components/HistoryTable";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
      className="background-black relative flex min-h-screen w-full flex-col"
    >
      <Navbar />
      {/* main */}
      <div className="flex flex-col items-center gap-y-10 max-md:gap-y-5 max-sm:gap-y-3">
        <h1 className="title-gradient large-60-bold max-md:title-35-bold max-sm:title-24-bold text-center max-lg:w-9/12 max-sm:w-9/12">
          Shorten Your Loooong Links :)
        </h1>
        <div className="flex w-[660px] flex-col gap-y-6 max-md:w-9/12">
          <p className="basic-16-normal max-sm:small-13-bold text-light text-center">
            Linkly is an efficient and easy-to-use URL shortening service that
            streamlines your online experience.
          </p>
          {/* Shorten your link Input */}
          <ShortenInput />
        </div>
        {/* History table */}
        <HistoryTable />
        {/* fixed footer */}
        <SignedOut>
          <div className="flex-center basic-16-normal max-md:small-13-normal absolute bottom-0 h-[80px] w-full gap-x-1 bg-neutral-900/30 text-white backdrop-blur-lg">
            <Link href="/" className="text-[#144EE3] underline">
              Register Now
            </Link>
            to enjoy Unlimited History
          </div>
        </SignedOut>
      </div>
    </div>
  );
}

export default Home;
