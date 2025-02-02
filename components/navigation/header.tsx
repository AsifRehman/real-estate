"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { useLoginStore } from "@/store/LoginStore";
import { user } from "@/actions/User";

const Header = () => {
  const { setIsLogin } = useLoginStore();
  const session = useSession();

  return (
    <header className="left-0 rounded-md w-full h-[80px] place-content-center shadow-md bg-white">
      <div className="px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="flex flex-wrap items-center justify-between">
              <Link href="/" className="">
                <Image
                  src="/favicon.ico"
                  loading="lazy"
                  width="99"
                  height="40"
                  className="object-contain"
                  alt="brand logo"
                />
              </Link>
              <nav className="flex flex-wrap items-center">
                <ul className="hidden lg:flex flex-wrap items-center font-lora text-[16px] xl:text-[18px] leading-none text-black">
                  <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                    Home
                  </li>
                  <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                    About
                  </li>
                  <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                    Properties
                  </li>
                  <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                    Blog
                  </li>
                  <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                    Contact
                  </li>
                </ul>
                {session.status !== "loading" && (
                  <ul className="flex flex-wrap items-center">
                    {session.status === "authenticated" ? (
                      <>
                        <li className="mr-5 xl:mr-[20px]">
                          <Button>
                            <Link
                              href={`/company/${session.data.user?.id}/properties`}
                            >
                              Company Dashboard
                            </Link>
                          </Button>
                        </li>
                        <li>
                          <img
                            src={session.data.user?.image || ""}
                            className="rounded-full cursor-pointer"
                            loading="lazy"
                            width="54"
                            height="54"
                            alt="avater"
                            onClick={() => signOut()}
                          />
                        </li>
                      </>
                    ) : (
                      <li>
                        <Button onClick={() => setIsLogin(true)}>Login</Button>
                      </li>
                    )}
                  </ul>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
