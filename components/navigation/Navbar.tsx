"use client";

import { cn } from "@/lib/utils";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const session = useSession();

  const isAllProperties =
    pathName === `/company/${session.data?.user?.id}/properties`;
  const isAddEditProperties = pathName.includes(
    `/company/${session.data?.user?.id}/AddEditProperties`
  );
  return (
    <div className="shadow-md p-4 rounded-md bg-slate-100 gap-4 flex">
      <Link
        href={`/company/${session.data?.user?.id}/properties`}
        className={cn(
          "p-2 border rounded-md",
          isAllProperties ? "bg-primary rounded-lg" : "border"
        )}
      >
        All Properties
      </Link>
      <Link
        href={`/company/${session.data?.user?.id}/AddEditProperties/new`}
        className={cn(
          "p-2 rounded-lg",
          isAddEditProperties ? "bg-primary rounded-lg" : "border"
        )}
      >
        Add Property
      </Link>
    </div>
  );
};

export default Navbar;
