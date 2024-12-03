"use client";
import LoginPage from "@/components/form/Login";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  
  return (
    <div className="flex h-md max-h-md">
      <section className="container my-auto">
        <div className="sub-container max-w-[496px]">
          <section className="space-y-6">
            <div className="mb-9 space-y-1">
              <h2 className="sub-header">Sign In</h2>
            </div>
          </section>
          <LoginPage />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Email Authentication
            </p>
          </div>
          <p className="text-green-500">
            Don't have an account
            <Link href="/register">
              <span className="text-blue-700 mx-2">:Sign Up</span>
            </Link>
          </p>
        </div>
      </section>

      <Image
        src="/assests/images/spaceship.gif"
        height={1000}
        width={1000}
        alt="authentication"
        className="side-img max-w-[50%] "
      />
    </div>
  );
};

export default Login;
