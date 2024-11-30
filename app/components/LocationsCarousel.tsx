import Image from "next/image";
import { Lexend_Deca } from "next/font/google";
import Ellipse from "./Ellipse";

const lexendDeca = Lexend_Deca({ subsets: ["latin"] });

interface Location {
  name: string;
  imageUrl: string;
  verified?: boolean;
}

const LocationsCarousel = () => {
  const locations: Location[] = [
    {
      name: "Lonavala",
      imageUrl: "/lonavala.png",
      verified: true,
    },
    {
      name: "Khandala",
      imageUrl: "/khandala.png",
    },
    {
      name: "Pawna",
      imageUrl: "/pawna.png",
    },
    {
      name: "Goa",
      imageUrl: "/goa.png",
    },
  ];

  return (
    <section className="py-20 px-20 relative">
      <Ellipse
        className="-top-[6rem] left-[48%] blur-[9rem] z-0"
        width="300px"
        height="300px"
        opacity={0.7}
      />
      <div className="mx-auto z-50">
        <h2 className="text-5xl font-cinzel text-white text-start mb-16 z-50" style={{fontWeight: "normal"}}>
          LOCATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 z-50">
          {locations.map((location, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[3/5] relative">
                <div className="">
                  <Image
                    src={location.imageUrl}
                    alt={location.name}
                    fill
                    className="object-cover w-[17.43rem] h-[30.5rem]"
                  />
                </div>
                {/* {location.verified && (
                  <div className="absolute top-4 left-4">
                    <Image
                      src="/verified-badge.png"
                      alt="Verified"
                      width={40}
                      height={40}
                    />
                  </div>
                )} */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-black/40 to-transparent rounded-lg">
                  <h3
                    className={`${lexendDeca.className} text-4xl font-semibold text-white text-center`}
                  >
                    {location.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Ellipse
        className="-bottom-[10rem] right-[78%] blur-[7rem] z-0"
        opacity={0.7}
      />
      <Ellipse
        className="-bottom-[10rem] left-[68%] blur-[7rem] z-0"
        opacity={0.7}
      />
    </section>
  );
};

export default LocationsCarousel;
