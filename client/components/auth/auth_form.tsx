"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import React from "react";
import SigninFormDemo from "./signin-form-demo";
import SignupFormDemo from "./signup-form-demo";

export default function AuthForm() {
  return (
    <div className="flex flex-col shadow-input mx-auto w-full max-w-md  bg-white rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-center text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
        Welcome to our platform
      </h2>
      <Tabs defaultValue="Sign_In">
        <TabsList className="flex justify-center ">
          <TabsTrigger className="flex w-full text-center" value="Sign_In">
            Sign In
          </TabsTrigger>
          <TabsTrigger className="flex w-full text-center" value="Sign_Up">
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Sign_In">
          <SigninFormDemo />
        </TabsContent>
        <TabsContent value="Sign_Up">
          <SignupFormDemo />
        </TabsContent>
      </Tabs>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px  block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
