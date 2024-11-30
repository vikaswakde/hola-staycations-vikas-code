import Image from "next/image";
import Ellipse from "./Ellipse";

const WhyUs = () => {
  const features = [
    {
      icon: "/why-us-globe.svg",
      title: "Carefully curated selection of luxury villas",
      width: 87.39,
      height: 87.39,
    },
    {
      icon: "/why-us-house.svg",
      title: "10,000+ staycations till date",
      width: 130.67,
      height: 87.39,
    },
    {
      icon: "/why-us-heart.svg",
      title: "More than 6+ years of hospitality experience",
      width: 91.21,
      height: 91.39,
    },
    {
      icon: "./why-us-star.svg",
      title: "4.8+ Average Rating",
      width: 91,
      height: 91,
    },
  ];

  return (
    <section className="py-20 px-20 relative pb-[20rem]">
      <Ellipse
        className="-top-[10rem] left-[78%] blur-[7rem] z-0"
        opacity={0.7}
      />
      <Image
        src="/small-line.svg"
        alt="Decorative Line"
        width={4}
        height={4}
        className="mx-auto absolute -top-[3rem] left-1/2 h-[8rem] "
      />
      <div className=" mx-auto">
        <h2 className="text-5xl font-cinzel text-white text-start mb-16">
          Why US?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={feature.width}
                height={feature.height}
                className="mx-auto"
              />
              <p className="text-white text-lg max-w-[10rem] text-center mx-auto font-medium">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/line.svg"
        alt="Decorative Line"
        width={4}
        height={4}
        className="mx-auto absolute -bottom-[3rem] left-1/2  "
      />
            <Ellipse
        className="-bottom-[7rem] left-[78%] blur-[7rem] z-0"
        opacity={0.7}
      />
            <Ellipse
        className="-bottom-[5rem] right-[78%] blur-[7rem] z-0"
        opacity={0.7}
      />
    </section>
  );
};

export default WhyUs;
