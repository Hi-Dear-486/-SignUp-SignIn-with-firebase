"use client";
import React, { useEffect, useState } from "react";
import CustomFormField from "../CustomFormField";
import { Form, FormControl } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/lib/validation";
import { GenderOptions, initialValues } from "@/constants";
import { toast } from "react-toastify";
import { FormFieldType } from "@/types";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import SubmitButton from "../SubmitButton";
import "react-toastify/dist/ReactToastify.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { doCreateUserWithEmailAndPassword } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/authContext";

const Registration = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userLoggedIn } = useAuth();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { ...initialValues },
  });

  const { handleSubmit, reset, watch, setValue } = form;
  const password = watch("password");

  // Automatically set confirmPassword value when password changes
  useEffect(() => {
    if (password) {
      setValue("confirmPassword", password);
    }
  }, [password, setValue]);

  const onSubmit = async (userData: z.infer<typeof RegisterSchema>) => {
    setIsLoading(true);
    try {
      if (!isRegistering) {
        setIsRegistering(true);
        await doCreateUserWithEmailAndPassword(
          userData.email,
          userData.password
        );
      }
      toast.success("Registeration form submitted successfully!");
      setIsLoading(false);
      reset();
    } catch (error: any) {
      toast.error(error.message);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } finally {
      setIsLoading(false);
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
            <h2 className="sub-header">Sign Up</h2>
          </div>
        </section>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Full Name"
          placeholder="Enter name"
          iconSrc={<CiUser />}
        />
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
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PASSWORD}
          name="confirmPassword"
          label="Confirm Passowrd"
          placeholder="Enter password"
          iconSrc={<RiLockPasswordLine />}
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SKELETON}
          name="gender"
          label="Gender"
          renderSkeleton={(field) => (
            <FormControl>
              <RadioGroup
                className="flex h-11 gap-6 xl:justify-between"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                {GenderOptions.map((option) => (
                  <div key={option} className="radio-group">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          )}
        />
        <SubmitButton isLoading={isLoading}>Submit and continue</SubmitButton>
      </form>
    </Form>
  );
};

export default Registration;
