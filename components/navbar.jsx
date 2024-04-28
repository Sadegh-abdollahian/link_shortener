import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex-between w-full p-7">
      <Link className="title-35-bold logo-gradient text-white" href="/">
        Linkly
      </Link>
      <div className="flex gap-x-3">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">
            <Button className="background-gray basic-16-bold flex h-[60px] w-[123px] gap-x-2 rounded-full border-2 border-[#353C4A] text-white">
              Login
              <FontAwesomeIcon
                icon={faSignIn}
                size="1x"
                style={{ color: "#C9CED6" }}
              />
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-primary-blue basic-16-bold box-shadow h-[60px] w-[178px] rounded-full text-white max-md:hidden">
              Register Now
            </Button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
