import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const fn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
