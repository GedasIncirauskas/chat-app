"use client";

import { ButtonHTMLAttributes, FC, useState } from "react";
import { TbLogout } from "react-icons/tb";
import { ImSpinner } from "react-icons/im";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import Button from "./Button";

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SignOutButton: FC<SignOutButtonProps> = ({ ...props }) => {
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);
  return (
    <Button
      {...props}
      variant="ghost"
      onClick={async () => {
        setIsSigningOut(true);
        try {
          await signOut();
        } catch (error) {
          toast.error("There was a problem signing out");
        } finally {
          setIsSigningOut(false);
        }
      }}
    >
      {isSigningOut ? (
        <ImSpinner className="animate-spin h-4 w-4" />
      ) : (
        <TbLogout className="w-4 h-4" />
      )}
    </Button>
  );
};

export default SignOutButton;
