import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { propertiesFormSchema } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

interface CustomInput {
  control: Control<z.infer<typeof propertiesFormSchema>>;
  name: FieldPath<z.infer<typeof propertiesFormSchema>>;
  label: string;
  placeholder: string;
  disabled: boolean;
  type?: "number" | "text";
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  disabled,
  type,
}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {name === "description" || name === "location" ? (
              <Textarea
                disabled={disabled}
                placeholder={placeholder}
                {...field}
                value={field.value as string}
              />
            ) : (
              <Input
                disabled={disabled}
                placeholder={placeholder}
                {...field}
                value={field.value}
                type={type}
              />
            )}
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
