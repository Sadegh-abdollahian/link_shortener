import { UserButton } from "@clerk/nextjs";
import "../../globals.css";

function Home() {
  return (
    <div className="background-black flex-center min-h-screen w-full">
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}

export default Home;
