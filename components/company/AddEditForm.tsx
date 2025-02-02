"use client";

import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomInput from "@/components/company/CustomInput";
import { propertiesFormSchema } from "@/lib/utils";
import { AddProperty, UpdateProperty } from "@/actions/property";
import Upload from "@/components/company/Upload";

interface AddEditFormProps {
  initialData: properties | undefined;
}

const AddEditForm = ({ initialData }: AddEditFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();

  const action = initialData ? "Save changes" : "Create";

  const defaultValues = initialData
    ? {
        ...initialData,
        images: initialData.images || [],
        transactionType: initialData.transactionType || "Sale",
      }
    : {
        title: "",
        Thumbnail: "",
        images: [],
        size: "",
        location: "",
        description: "",
        transactionType: "Sale" as "Sale" | "Rent" | "Airbnb",
        price: 0,
        rooms: 0,
        bathroom: 0,
        parking: 0,
      };

  const form = useForm<z.infer<typeof propertiesFormSchema>>({
    resolver: zodResolver(propertiesFormSchema),
    defaultValues,
  });

  // submit values
  const onSubmit = async (values: z.infer<typeof propertiesFormSchema>) => {
    // console.log(values);
    setIsLoading(true);
    try {
      if (initialData) {
        await UpdateProperty(values, initialData.id);
      } else {
        await AddProperty(values);
      }
      setIsLoading(false);

      router.push(`/company/${session.data?.user?.id}/properties`);
    } catch (error) {
      console.error("Error uploading to Firebase:", error);
      setIsLoading(false);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  // console.log(form.formState.errors);
  return (
    <div className="mt-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4">
          {/* Thumbnail */}
          <FormField
            control={form.control}
            name="Thumbnail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thumbnail</FormLabel>
                <FormControl>
                  <Upload
                    images={field.value === "" ? [] : [field.value]}
                    onChange={(image) => field.onChange(image)}
                    disabled={isLoading}
                    multiple={false}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* images */}
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Other Images(Optional)</FormLabel>
                <FormControl>
                  <Upload
                    images={field.value}
                    onChange={(image) => field.onChange(image)}
                    disabled={isLoading}
                    multiple={true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Title */}
            <CustomInput
              control={form.control}
              name="title"
              label="Title"
              placeholder="Title"
              disabled={isLoading}
              type={"text"}
            />

            {/* description */}
            <CustomInput
              control={form.control}
              name="description"
              label="Description"
              placeholder="Description"
              disabled={isLoading}
            />

            {/* price */}
            <CustomInput
              control={form.control}
              name="price"
              label="Price"
              placeholder="Product Price"
              disabled={isLoading}
              type={"number"}
            />

            {/* location */}
            <CustomInput
              control={form.control}
              name="location"
              label="Location"
              placeholder="Location"
              disabled={isLoading}
            />

            {/* parking */}
            <CustomInput
              control={form.control}
              name="parking"
              label="Parking"
              placeholder="Parking"
              disabled={isLoading}
              type={"number"}
            />

            {/* size */}
            <CustomInput
              control={form.control}
              name="size"
              label="Size"
              placeholder="Size"
              disabled={isLoading}
              type={"text"}
            />

            {/* rooms */}
            <CustomInput
              control={form.control}
              name="rooms"
              label="Number of Rooms"
              placeholder="Number of Rooms"
              disabled={isLoading}
              type={"number"}
            />

            {/* bathroom */}
            <CustomInput
              control={form.control}
              name="bathroom"
              label="Number of bathroom"
              placeholder="Number of bathroom"
              disabled={isLoading}
              type={"number"}
            />

            {/* transactionType */}
            <FormField
              control={form.control}
              name="transactionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transaction Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Property Transaction Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Sale">Sale</SelectItem>
                      <SelectItem value="Rent">Rent</SelectItem>
                      <SelectItem value="Airbnb">Airbnb</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            {/* btn */}
            <Button
              disabled={isLoading}
              className="w-full tracking-wider float-right mb-4 sm:mt-8"
              type="submit"
            >
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddEditForm;
