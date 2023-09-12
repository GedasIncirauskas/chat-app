import AddUserButton from "@/components/ui/buttons/AddUserButton";
import { FC } from "react";

const AddNewUser: FC = ({}) => {
  return (
    <main className="pt-8">
      <h1 className="text-3xl mb-2 sm:text-5xl md:mb-8 font-bold">
        Add a new friend
      </h1>
      <AddUserButton />
    </main>
  );
};

export default AddNewUser;
