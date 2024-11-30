"use client";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface PropertyCard {
  name: string;
  bedrooms: number;
  location: string;
  imageUrl: string;
  price: number;
}

const CuratedByExperts = () => {
  const properties: PropertyCard[] = [
    {
      name: "SKY",
      bedrooms: 4,
      location: "GOA",
      imageUrl: "/curated.png",
      price: 18000,
    },
    {
      name: "OSCAR 3BHK",
      bedrooms: 4,
      location: "GOA",
      imageUrl: "/curated.png",
      price: 18000,
    },
    {
      name: "SKY",
      bedrooms: 4,
      location: "GOA",
      imageUrl: "/curated.png",
      price: 18000,
    },
    {
      name: "OSCAR 3BHK",
      bedrooms: 4,
      location: "GOA",
      imageUrl: "/curated.png",
      price: 18000,
    },
    {
      name: "SKY",
      bedrooms: 4,
      location: "GOA",
      imageUrl: "/curated.png",
      price: 18000,
    },
    {
      name: "OSCAR 3BHK",
      bedrooms: 4,
      location: "GOA",
      imageUrl: "/curated.png",
      price: 18000,
    },
    {
      name: "SKY",
      bedrooms: 4,
      location: "GOA",
      imageUrl: "/curated.png",
      price: 18000,
    },
    {
      name: "OSCAR 3BHK",
      bedrooms: 4,
      location: "GOA",
      imageUrl: "/curated.png",
      price: 18000,
    },
    {
      name: "SKY",
      bedrooms: 4,
      location: "GOA",
      imageUrl: "/curated.png",
      price: 18000,
    },
    {
      name: "OSCAR 3BHK",
      bedrooms: 4,
      location: "GOA",
      imageUrl: "/curated.png",
      price: 18000,
    },
    {
      name: "SKY",
      bedrooms: 4,
      location: "GOA",
      imageUrl: "/curated.png",
      price: 18000,
    },
    {
      name: "OSCAR 3BHK",
      bedrooms: 4,
      location: "GOA",
      imageUrl: "/curated.png",
      price: 18000,
    },
    // Add more properties as needed
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 850; // Adjust based on your design
      if (direction === "left") {
        carouselRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="py-20 px-20">
      <div>
        <h2 className="text-5xl font-cinzel text-white text-start mb-16">
          CURATED BY OUR EXPERTS
        </h2>
        <div className="relative">
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:scale-110 transition-transform"
          >
            <ChevronLeft />
          </button>
          <div
            ref={carouselRef}
            className="overflow-x-auto no-scrollbar select-none flex gap-6 pb-4 touch-pan-x"
          >
            {properties.map((property, index) => (
              <div
                key={index}
                className="relative rounded-[13.53px] overflow-hidden group flex-none"
                style={{ width: "calc(25% - 18px)", minWidth: "280px" }}
              >
                <div className="aspect-[3/3.4] relative">
                  <Image
                    src={property.imageUrl}
                    alt={property.name}
                    fill
                    className="object-cover pointer-events-none"
                    draggable="false"
                  />
                  <div className="absolute top-4 left-4">
                    {/* <Image
                      src="/verified-badge.png"
                      alt="Verified"
                      width={40}
                      height={40}
                      className="pointer-events-none"
                      draggable="false"
                    /> */}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent font-cinzel">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center flex-col w-full gap-2">
                      <h3
                        className="text-3xl font-cinzel text-white"
                        style={{ fontWeight: "bolder" }}
                      >
                        {property.name}
                      </h3>
                      <p className="text-white font-cinzel font-sm text-center">
                        RS. {property.price} ONWARDS
                      </p>
                      <div className="flex items-center gap-5 text-white">
                        <div className="flex w-full gap-2">
                          <span className="font-bold text-2xl gap-3">
                            {property.bedrooms}
                          </span>
                          <span>Bedrooms</span>
                        </div>
                        <span>|</span>
                        <div className="flex  gap-3">
                          <span>
                            <MapPin />
                          </span>
                          <span>{property.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:scale-110 transition-transform"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CuratedByExperts;
