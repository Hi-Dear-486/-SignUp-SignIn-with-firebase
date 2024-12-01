"use client";
import React, { useEffect, useState } from "react";
import CustomFormField from "../CustomFormField";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/validation";
import { initialValues } from "@/constants";
import { toast } from "react-toastify";
import { FormFieldType } from "@/types";
import { MdOutlineEmail } from "react-icons/md";
import SubmitButton from "../SubmitButton";
import "react-toastify/dist/ReactToastify.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { doSignInWithEmailAndPassword } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/authContext";

const LoginPage = () => {
  const [isSigning, setIsSigning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userLoggedIn } = useAuth();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: { ...initialValues },
  });

  const { handleSubmit, reset } = form;

  const onSubmit = async (userData: z.infer<typeof LoginSchema>) => {
    console.log("🚀 ~ onSubmit ~ userData:", userData);
    setIsLoading(true);
    try {
      if (!isSigning) {
        setIsSigning(true);
        await doSignInWithEmailAndPassword(userData.email, userData.password);
      }
      setIsLoading(false);
      reset();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (userLoggedIn) {
      router.push("/dashboard");
    }
  }, [userLoggedIn, router]);
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="flex-1 space-y-2">
          <h1>Welcome 🖐</h1>
          <p className="text-gray-700">Let us Know more about yourself.</p>
        </section>
        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Sign In</h2>
          </div>
        </section>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email"
          placeholder="Enter email"
          iconSrc={<MdOutlineEmail />}
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PASSWORD}
          name="password"
          label="Password"
          placeholder="Enter password"
          iconSrc={<RiLockPasswordLine />}
        />

        <SubmitButton isLoading={isLoading}>Login</SubmitButton>
      </form>
    </Form>
  );
};

export default LoginPage;
