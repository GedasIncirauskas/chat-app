"use client";

import { FC } from "react";
import Button from "./Button";

interface AddUserButtonProps {}

const AddUserButton: FC<AddUserButtonProps> = ({}) => {
  const addFriend = async () => {
    try {
    } catch (error) {}
  };

  return (
    <form className="max-w-sm">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Add user by email address
      </label>
      <div className="mt-2 flex gap-4">
        <input
          type="text"
          className="block w-full rounded-md border-0 py-1 text-grey-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grey-400 placeholder:pl-1 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="email@email.com"
        />
        <Button onClick={addFriend}>Add</Button>
      </div>
    </form>
  );
};

export default AddUserButton;
