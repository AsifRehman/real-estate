import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="left-0 sticky top-0 z-30 w-full h-[80px] place-content-center shadow-md bg-white">
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

                <ul className="flex flex-wrap items-center">
                  <li className="sm:mr-5 xl:mr-[20px] relative group">
                    <img
                      src="https://htmldemo.net/bery/bery/assets/images/user/avater.png"
                      loading="lazy"
                      width="62"
                      height="62"
                      alt="avater"
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
