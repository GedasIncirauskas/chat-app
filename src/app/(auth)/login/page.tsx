"use client";

import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import Button from "@/components/ui/buttons/Button";
import googleIcon from "../../../../public/google.svg";
import { FaReact } from "react-icons/fa";
import Image from "next/image";

const Page: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast.error("Something went wrong with login");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="gap-4 flex flex-col items-center md:gap-6">
            <div className="flex space-x-2">
              <h1 className="text-center text-sm md:text-3xl tracking-tight text-gray-900 font-bold">
                Welcome to chat app
              </h1>
              <FaReact className="h-5 md:h-8 w-auto text-gray-900" />
            </div>
            <h2 className="sm:text-sm md:block md:text-xl leading-2 text-gray-900 text-center">
              Sign in to your account
            </h2>
          </div>
          <Button
            isLoading={isLoading}
            type="button"
            className="max-w-sm mx-auto w-full"
            onClick={loginWithGoogle}
          >
            {isLoading ? null : (
              <Image
                src={googleIcon}
                alt="Google"
                height={15}
                width={15}
                className="mr-1"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
