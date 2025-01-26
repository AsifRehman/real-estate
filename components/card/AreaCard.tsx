interface AreaCardProps {
  image: string;
  area: string;
  properties: string;
}
const AreaCard = ({ image, area, properties }: AreaCardProps) => {
  return (
    <div className="relative group cursor-pointer">
      {/* <Link
            href="agency.html"
            className="block group-hover:shadow-[0_10px_15px_0px_rgba(0,0,0,0.1)] transition-all duration-300"
          > */}
      <img
        src={image}
        className="w-full h-full block mx-auto rounded-[6px]"
        loading="lazy"
        width="270"
        height="380"
        alt="New York"
      />
      <div className="bg-[rgb(255,253,252,0.9)] rounded-[6px] px-[5px] py-[15px] absolute group-hover:bottom-[25px] group-hover:opacity-100 bottom-[0px] opacity-0 left-[25px] right-[25px] transition-all duration-500">
        <span className="font-lora font-normal text-[18px] text-primary transition-all leading-none">
          {area}
        </span>
        <p className="font-light text-[14px] capitalize text-black transition-all leading-none">
          {properties} Properties
        </p>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default AreaCard;
