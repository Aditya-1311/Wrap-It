import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => (
  <div className="flex justify-center items-center min-h-screen">
    <SignUp path="/register" routing="path" />
  </div>
);

export default SignUpPage;
