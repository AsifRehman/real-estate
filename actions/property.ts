"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

import { properties } from "@/drizzle/schema";
import { db } from "@/drizzle";
import { DeleteImages } from "@/actions/Uploadthing";
import { auth } from "@/auth";

interface valuesProps {
  title: string;
  Thumbnail: string;
  images: string[];
  location: string;
  description: string;
  price: number;
  rooms: number;
  bathroom: number;
  parking: number;
  transactionType: "Sale" | "Rent" | "Airbnb";
  size: string;
}

// add property
export const AddProperty = async (values: valuesProps) => {
  const session = await auth();
  if (!session?.user) return;

  try {
    await db.insert(properties).values({
      userId: session.user?.id!,
      bathroom: values.bathroom,
      description: values.description,
      images: values.images,
      price: values.price,
      Thumbnail: values.Thumbnail,
      title: values.title,
      location: values.location,
      size: values.size,
      parking: values.parking,
      rooms: values.rooms,
      transactionType: values.transactionType,
    });
    revalidatePath("/", "layout");
  } catch (error) {
    console.log(error);
  }
};

// update property
export const UpdateProperty = async (values: valuesProps, id: string) => {
  const user = await auth();
  if (!user) return;
  if (!id) return;

  try {
    await db
      .update(properties)
      .set({
        bathroom: values.bathroom,
        description: values.description,
        images: values.images,
        price: values.price,
        Thumbnail: values.Thumbnail,
        title: values.title,
        location: values.location,
        size: values.size,
        parking: values.parking,
        rooms: values.rooms,
        transactionType: values.transactionType,
      })
      .where(eq(properties.id, id));

    revalidatePath("/", "layout");
  } catch (error) {
    console.log(error);
  }
};

// delete property
export const DeleteProperty = async (
  id: string,
  Thumbnail: string,
  images: string[]
) => {
  try {
    await DeleteImages({ files: images });
    await DeleteImages({ files: [Thumbnail] });
    await db.delete(properties).where(eq(properties.id, id));
  } catch (error) {
    console.log(error);
  }
};
