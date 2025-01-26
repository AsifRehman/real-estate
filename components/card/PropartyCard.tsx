const PropartyCard = () => {
  return (
    <div className="overflow-hidden rounded-md drop-shadow-[0px_0px_5px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
      <div className="relative">
        <a href="properties-details.html" className="block">
          <img
            src="https://htmldemo.net/bery/bery/assets/images/properties/properties1.jpg"
            className="w-full h-full"
            loading="lazy"
            width="370"
            height="266"
            alt="Orchid Casel de Paradise."
          />
        </a>
        <div className="flex flex-wrap flex-col absolute top-5 right-5">
          <button className="flex flex-wrap items-center bg-[rgb(11,44,61,0.8)] p-[5px] rounded-[2px] text-white mb-[5px] text-xs">
            icon 07
          </button>
          <button className="flex flex-wrap items-center bg-[rgb(11,44,61,0.8)] p-[5px] rounded-[2px] text-white text-xs">
            <img
              className="mr-1"
              src="assets/images/icon/video.png"
              loading="lazy"
              width="14"
              height="10"
              alt="camera icon08"
            />
          </button>
        </div>
        <span className="absolute bottom-5 left-5 bg-[#FFFDFC] p-[5px] rounded-[2px] text-primary leading-none text-[14px] font-normal capitalize">
          for Sale
        </span>
      </div>

      <div className="py-[20px] px-[20px] text-left">
        <h3>
          <a
            href="properties-details.html"
            className="font-lora leading-tight text-[22px] xl:text-[26px] text-primary hover:text-secondary transition-all font-medium"
          >
            Orchid Casel de Paradise.
          </a>
        </h3>
        <h4>
          <a
            href="properties-details.html"
            className="font-light text-[14px] leading-[1.75] underline"
          >
            18B Central Street, San Francisco
          </a>
        </h4>
        <span className="font-light text-sm">Added: 25 November, 2021</span>
        <ul className="flex flex-wrap items-center justify-between text-[12px] mt-[10px] mb-[15px] pb-[10px] border-b border-[#E0E0E0]">
          <li className="flex flex-wrap items-center pr-[25px] sm:pr-[5px] md:pr-[25px] border-r border-[#E0DEDE]">
            Svg
            <span>1230 Sq.fit</span>
          </li>
          <li className="flex flex-wrap items-center pr-[25px] sm:pr-[5px] md:pr-[25px] border-r border-[#E0DEDE]">
            Icon
            <span>5</span>
          </li>
          <li className="flex flex-wrap items-center pr-[25px] sm:pr-[5px] md:pr-[25px] border-r border-[#E0DEDE]">
            Svg
            <span>3</span>
          </li>
          <li className="flex flex-wrap items-center">
            Svg
            <span>2</span>
          </li>
        </ul>

        <ul>
          <li className="flex flex-wrap items-center justify-between">
            <span className="font-lora text-base text-primary leading-none font-medium">
              Price: $255300
            </span>

            <span className="flex flex-wrap items-center">
              <button
                className="mr-[15px] text-[#9D9C9C] hover:text-secondary"
                aria-label="svg"
              >
                svg
              </button>
              <button
                className="text-[#9D9C9C] hover:text-secondary"
                aria-label="svg"
              >
                svg
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PropartyCard;
