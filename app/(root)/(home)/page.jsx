import Navbar from "@/components/navbar";
import "../../globals.css";

function Home() {
  return (
    <div className="background-black flex min-h-screen w-full flex-col">
      <Navbar />
      <h1 className="title-gradient large-60-bold max-sm:title-35-bold text-center">
        Shorten Your Loooong Links :)
      </h1>
    </div>
  );
}

export default Home;
