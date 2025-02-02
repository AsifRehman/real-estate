import { ChangeEventHandler, useRef, useTransition } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useUploadThing } from "@/lib/uploadthing";
import { DeleteImages } from "@/actions/Uploadthing";

const Upload = ({
  images,
  disabled,
  onChange,
  multiple,
}: {
  images: string[];
  disabled: boolean;
  multiple: boolean;
  onChange: (image: string | string[]) => void;
}) => {
  const filePickerRef = useRef<HTMLInputElement | null>(null);
  const [pending, startTransition] = useTransition();

  // upload image image
  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onUploadError: () => {
      toast.error("Something went wrong!");
    },
    onClientUploadComplete: (res) => {
      const urls = res?.map((file) => file.url);
      const url = res?.[0].url;

      onChange(multiple ? urls : url);
      const message = `Uploaded Successfully!`;
      toast.success(message);
    },
  });
  const addItem: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const files = e.target.files;

    if (!files) {
      toast.error("Please select your image(s)");
      return;
    }

    if (multiple) {
      const multipleFiles = Array.from(files);
      if (multipleFiles.length > 10) {
        toast.error("Maximum number of images is 10.");
        return;
      } else {
        startUpload(multipleFiles);
      }
    } else {
      const file = files?.[0];

      startUpload([file]);
    }
  };
  // delete
  const Delete = async () => {
    startTransition(async () => {
      const deleted = await DeleteImages({ files: images });
      // console.log(deleted);
      if (deleted.success) {
        onChange(multiple ? [] : "");
        toast.success("Deleted Successfully!");
      }
    });
  };

  // console.log(images);

  return (
    <div className="pb-4">
      {/* upload btn */}
      {images?.length === 0 && (
        <Button
          className="gap-2"
          type="button"
          variant="secondary"
          disabled={disabled || pending || isUploading}
          onClick={() => filePickerRef.current!.click()}
        >
          {isUploading ? (
            <p>Uploading....</p>
          ) : (
            <>
              <AiOutlineCloudUpload className="h-5 w-5" />
              <input
                type="file"
                ref={filePickerRef}
                hidden
                multiple={multiple}
                accept="image/*"
                onChange={addItem}
              />
              Upload
            </>
          )}
        </Button>
      )}
      {/* Image View */}
      {images?.length > 0 && (
        <div className="flex items-start space-x-2">
          <div className="absolute items-center justify-center ml-2">
            <Button
              type="button"
              variant="destructive"
              size="sm"
              disabled={pending || disabled}
              onClick={Delete}
            >
              <MdDelete className="h-4 w-4" />
            </Button>
          </div>
          <div className="overflow-x-auto flex gap-1 scrollbar">
            {images?.map((image, index) => (
              <Image
                src={image}
                className="w-full h-[20%] rounded-xl max-h-40 object-contain pb-2"
                key={index}
                alt={`Image ${index}`}
                height={500}
                width={500}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
