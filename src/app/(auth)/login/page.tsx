"use client";

import Button from "@/components/ui/buttons/Button";
import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import { toast } from "react-hot-toast";
import googleIcon from "../../../public/google.svg";
import Image from "next/image";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
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
          <div className="flex flex-col items-center gap-8">
            logo
            <h2 className="mt-6 text-center text-3xl fond-bold tracking-tight text-gray-900">
              Sign in to you account
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
