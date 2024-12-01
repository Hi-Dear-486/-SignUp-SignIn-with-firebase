"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/authContext";
import { doSignOut } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
const Dashboard = () => {
  const { userLoggedIn } = useAuth();
  const router = useRouter();
  const logout = async () => {
    try {
      await doSignOut();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/");
    }
  }, [userLoggedIn, router]);
  return (
    <>
      {userLoggedIn ? (
        <>
          <Button onClick={logout}>Signout</Button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Dashboard;
