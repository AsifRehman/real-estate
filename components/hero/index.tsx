import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="lg:flex">
      <div className="sm:flex justify-center items-center lg:hidden">
        <img
          className=""
          src="https://htmldemo.net/bery/bery/assets/images/about/about1.png"
          alt="hero image"
        />
      </div>
      <div className="lg:pl-16 items-center justify-center flex flex-col lg:w-[50%]">
        <div className="lg:max-w-[560px] items-center justify-center flex flex-col">
          <h1 className="font-lora text-primary text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-wider">
            <span className="flex leading-relaxed">
              <span className="underline">Modern</span>
              ,Creative
            </span>
            &amp; Luxury <span className="underline">Homes</span>
          </h1>

          <p className="text-base text-gray-400 mt-5 mb-8 text text-center">
            Huge number of propreties availabe here for buy, and sell, also you
            can find here co-living property, So you have lots of opportunity
          </p>
          <div className="inline-block mb-[60px] hero_btn">
            <Button className="">Contact us</Button>
          </div>
          <ul className="flex flex-wrap list-none justify-center items-center">
            <li className="block">
              <span className="font-lora text-primary text-2xl items-center justify-center flex">
                <span>20</span> <span>k+</span>
              </span>
              <p className="text-gray-500">Properties</p>
            </li>
            <li className="block pl-[25px] sm:pl-[40px] md:pl-[60px]">
              <span className="font-lora text-primary text-2xl items-center justify-center flex">
                <span>12</span> <span>k+</span>
              </span>
              <p className="text-gray-500">Customers</p>
            </li>
            <li className="block pl-[25px] sm:pl-[40px] md:pl-[60px]">
              <span className="font-lora text-primary text-2xl items-center justify-center flex">
                <span>160</span> <span>+</span>
              </span>
              <p className="text-gray-500">Awards Win</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-8 pt-10 hidden lg:flex lg:w-[50%]">
        <img
          className=""
          src="https://htmldemo.net/bery/bery/assets/images/about/about1.png"
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default Hero;
