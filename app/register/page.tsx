import Registration from "@/components/form/Registration";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex h-md max-h-md">
      <section className="container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assests/images/logo.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit rounded-full bg-transparent"
          />
          <Registration />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Email Authentication
            </p>
          </div>
          <p className="text-green-500">
            Have an account
            <Link href="/login">
              <span className="text-blue-700 mx-2">:Sign in</span>
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

export default Register;
