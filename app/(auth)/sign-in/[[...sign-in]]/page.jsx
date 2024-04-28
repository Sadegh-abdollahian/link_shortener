import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="flex-center min-h-screen w-full">
      <SignIn path="/sign-in" />
    </div>
  );
}