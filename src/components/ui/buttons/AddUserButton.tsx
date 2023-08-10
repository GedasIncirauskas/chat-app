"use client";

import { FC, useState } from "react";
import Button from "./Button";
import { addUserValidation } from "@/lib/validations/add-user";
import axios, { AxiosError } from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface AddUserButtonProps {}

type FormData = z.infer<typeof addUserValidation>;

const AddUserButton: FC<AddUserButtonProps> = ({}) => {
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(addUserValidation),
  });

  const addFriend = async (email: string) => {
    try {
      const validateEmail = addUserValidation.parse({ email });
      await axios.post("/api/friends/add", {
        email: validateEmail,
      });
      setShowSuccess(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError("email", { message: error.message });
        return;
      }
      if (error instanceof AxiosError) {
        setError("email", { message: error.response?.data });
        return;
      }
      setError("email", { message: "Something went wrong" });
    }
  };

  const onSubmit = (data: FormData) => {
    addFriend(data.email);
  };

  return (
    <form className="max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Add user by email address
      </label>
      <div className="mt-2 flex gap-4">
        <input
          {...register("email")}
          type="text"
          className="block w-full rounded-md border-0 py-1 text-grey-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grey-400 placeholder:pl-1 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="email@email.com"
        />
        <Button type="submit">Add</Button>
      </div>
      <pre className="text-sm text-red-600 mt-1">{errors.email?.message}</pre>
      {showSuccess ? (
        <pre className="text-sm text-green-600 mt-1">
          User added successfully!
        </pre>
      ) : null}
    </form>
  );
};

export default AddUserButton;
