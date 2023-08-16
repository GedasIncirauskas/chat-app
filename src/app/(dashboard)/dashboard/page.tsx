import React, { FC } from "react";
import Button from "@/components/ui/buttons/Button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = async ({}) => {
  const session = await getServerSession(authOptions);
  return <pre>{"dash"}</pre>;
};

export default Dashboard;
