"use client";

import { useState } from "react";
import Moment from "react-moment";
import { RiCustomSize } from "react-icons/ri";
import { IoBedSharp } from "react-icons/io5";
import { LuSquareParking } from "react-icons/lu";
import { LiaBathSolid } from "react-icons/lia";
import Link from "next/link";
import { useSession } from "next-auth/react";

import PropertyDrawer from "@/components/card/PropertyDrawer";

const PropartyCard = ({
  property,
  company,
}: {
  property: properties;
  company: company | undefined;
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const session = useSession();

  return (
    <>
      <PropertyDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        property={property}
        company={company}
      />
      <div className="overflow-hidden rounded-md drop-shadow-[0px_0px_5px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
        <div className="relative">
          <div className="block">
            <img
              src={property.Thumbnail}
              onClick={() => setOpenDrawer(true)}
              className="size-full cursor-pointer"
              loading="lazy"
              width="370"
              height="266"
              alt={property.title}
            />
          </div>
          <span className="absolute bottom-5 left-5 bg-[#FFFDFC] p-[5px] rounded-md text-primary leading-none text-[14px] font-normal capitalize">
            for {property.transactionType}
          </span>
          {property.userId === session?.data?.user?.id && (
            <Link
              href={`/company/${session?.data?.user?.id}/AddEditProperties/${property.id}`}
              className="absolute top-4 right-4 bg-[#FFFDFC] p-[5px] rounded-md text-primary"
            >
              Edit Property
            </Link>
          )}
        </div>
        <div className="py-[20px] px-[20px] text-left">
          <h3 className="leading-tight text-lg xl:text-xl text-primary hover:text-primary/50 transition-all font-medium">
            {property.title}
          </h3>
          <h4 className="font-light text-[14px] leading-[1.75] underline">
            {property.location}
          </h4>
          <span className="font-light text-sm">
            Added:
            {property.createdAt && (
              <Moment fromNow>{property.createdAt}</Moment>
            )}
          </span>
          <ul className="flex flex-wrap items-center justify-between text-sm mt-[10px] mb-[15px] pb-[10px] border-b border-[#E0E0E0]">
            <li className="flex flex-wrap items-center pr-[25px] sm:pr-[5px] md:pr-[20px] border-r border-[#E0DEDE]">
              <RiCustomSize className="mr-1" />
              <span>{property.size}</span>
            </li>
            <li className="flex flex-wrap items-center pr-[25px] sm:pr-[5px] md:pr-[20px] border-r border-[#E0DEDE]">
              <IoBedSharp className="mr-1" />
              <span>{property.rooms}</span>
            </li>
            <li className="flex flex-wrap items-center pr-[25px] sm:pr-[5px] md:pr-[20px] border-r border-[#E0DEDE]">
              <LuSquareParking className="mr-1" />
              <span>{property.parking}</span>
            </li>
            <li className="flex flex-wrap items-center">
              <LiaBathSolid className="mr-1" />
              <span>{property.bathroom}</span>
            </li>
          </ul>
          <ul>
            <li className="flex flex-wrap items-center justify-between">
              <span className="font-lora text-base text-primary leading-none font-medium">
                Price: ${property.price}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default PropartyCard;
