import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-10 justify-center flex items-center">
      <SignUp />
    </div>
  );
}
