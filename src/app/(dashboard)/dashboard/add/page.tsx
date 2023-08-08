import AddUserButton from "@/components/ui/buttons/AddUserButton";
import { FC } from "react";

const AddNewUser: FC = ({}) => {
  return (
    <main className="pt-8">
      <h1 className="font-bold text-5xl mb-8">Add a new friend</h1>
      <AddUserButton />
    </main>
  );
};

export default AddNewUser;
