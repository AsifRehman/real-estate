import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";

const PropertyDrawer = ({
  openDrawer,
  setOpenDrawer,
  property,
  company,
}: {
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
  property: properties;
  company: company | undefined;
}) => {
  const images = property.images
    ? [...property.images, property.Thumbnail]
    : [property.Thumbnail];
  const session = useSession();

  if (openDrawer) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 flex items-end">
        <div className="relative w-full mx-auto bg-background rounded-t-[10px] h-[90vh] overflow-y-auto hide-scrollbar">
          <div className="sticky top-0 z-30 flex gap-4">
            <Button
              className="right-2 top-2 absolute"
              onClick={() => setOpenDrawer(false)}
            >
              Close
            </Button>
            {property.userId === session?.data?.user?.id && (
              <Link
                href={`/company/${session?.data?.user?.id}/AddEditProperties/${property.id}`}
                className="absolute right-24 top-2 bg-[#FFFDFC] p-[5px] rounded-md text-primary"
              >
                Edit Property
              </Link>
            )}
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 12000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  id="scrollingImage"
                  src={image}
                  alt="property"
                  className="h-full w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="block md:flex justify-between w-full gap-6 px-6 mt-4">
            <div className="w-full">
              <div className="bg-gray-300 p-[5px] rounded-[2px] text-primary leading-none text-[14px] font-normal capitalize w-fit">
                for {property.transactionType}
              </div>
              <div className="md:flex justify-between w-full gap-3 mt-4">
                <span className="font-bold text-lg mr-2">
                  ${property.title}
                </span>
                <span className="font-extrabold text-xl">
                  ${property.price}
                </span>
                <p className="flex gap-4">
                  <span className="font-extrabold text-xl">
                    {property.rooms} Rooms
                  </span>
                  <span className="font-extrabold text-xl">
                    {property.bathroom} Bathrooms
                  </span>
                  <span className="font-extrabold text-xl">
                    {property.parking} Parking
                  </span>
                  <span className="font-extrabold text-xl">
                    {property.size}
                  </span>
                </p>
              </div>
              <p className="mb-4 font-serif mt-4 gap-2">
                <span className="font-bold">{property.location}</span>
                {/* <span className="font-semibold">{property.size}</span> */}
              </p>
              <p className="mb-4 font-serif mt-4 text-center">
                {property.description}
              </p>
            </div>
            <div className="md:w-[30%] mt-4 mb-4">
              <div className="border rounded-lg p-4">
                <p className="text-sm font-semibold">Listed by:</p>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={company?.image || ""}
                    className="rounded-full"
                    alt=""
                  />
                  <p className="mt-3 text-xl font-extrabold">{company?.name}</p>
                  {/* <p className="mt-3 text-xl font-extrabold">{company.userName}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PropertyDrawer;
