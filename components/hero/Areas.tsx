import AreaCard from "../card/AreaCard";

const Areas = () => {
  return (
    <div className="mb-[30px] lg:mb-[60px] text-center mt-8">
      <span className="text-primary text-tiny inline-block mb-2">
        Explore Cities
      </span>
      <h2 className="font-lora text-black text-2xl capitalize font-bold">
        Find Your Neighborhood.
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 hide-scrollbar gap-2 w-full mt-2 justify-center items-center">
        <AreaCard
          area="New York"
          properties="120"
          image="https://htmldemo.net/bery/bery/assets/images/cities/image1.png"
        />
        <AreaCard
          area="Sun Francisco"
          properties="12"
          image="https://htmldemo.net/bery/bery/assets/images/cities/image2.png"
        />
        <AreaCard
          area="New York"
          properties="120"
          image="https://htmldemo.net/bery/bery/assets/images/cities/image3.png"
        />
        <AreaCard
          area="New York"
          properties="120"
          image="https://htmldemo.net/bery/bery/assets/images/cities/image4.png"
        />
      </div>
    </div>
  );
};

export default Areas;
