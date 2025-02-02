import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const propertiesFormSchema = z.object({
  title: z.string().min(20),
  Thumbnail: z.string().min(1),
  images: z.string().array().optional().default([]),
  location: z.string().min(1),
  description: z.string().min(40),
  price: z.coerce.number().min(1),
  rooms: z.coerce.number().min(1),
  bathroom: z.coerce.number().min(1),
  parking: z.coerce.number().min(1),
  transactionType: z.enum(["Sale", "Rent", "Airbnb"]),
  size: z.string().min(1),
});
