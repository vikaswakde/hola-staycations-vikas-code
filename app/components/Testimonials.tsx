"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface Testimonial {
  name: string;
  rating: number;
  date: string;
  comment: string;
  imageUrl: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Akashi Kumari",
      rating: 4.5,
      date: "2024.03.02",
      comment:
        "My stay at the Grand Vista Hotel was absolutely incredible! From the moment I checked in, I was greeted with warmth and professionalism. The room was immaculate, the amenities top-notch, and the service was exceptional. Pure luxury and comfort. I can't wait to return!",
      imageUrl: "/testi.png",
    },
    {
      name: "Agnes Remi",
      rating: 4.5,
      date: "2024.03.02",
      comment:
        "My stay at the Grand Vista Hotel was absolutely incredible! I was impressed with the level of service, greeted with warmth and professionalism. The room was immaculate, the amenities top-notch, and the service was exceptional. Pure luxury and comfort. I can't wait to return!",
      imageUrl: "/testi.png",
    },
    {
      name: "Akashi Kumari",
      rating: 4.5,
      date: "2024.03.02",
      comment:
        "My stay at the Grand Vista Hotel was absolutely incredible! From the moment I checked in, I was greeted with warmth and professionalism. The room was immaculate, the amenities top-notch, and the service was exceptional. Pure luxury and comfort. I can't wait to return!",
      imageUrl: "/testi.png",
    },
    {
      name: "Agnes Remi",
      rating: 4.5,
      date: "2024.03.02",
      comment:
        "My stay at the Grand Vista Hotel was absolutely incredible! I was impressed with the level of service, greeted with warmth and professionalism. The room was immaculate, the amenities top-notch, and the service was exceptional. Pure luxury and comfort. I can't wait to return!",
      imageUrl: "/testi.png",
    },
    {
      name: "Akashi Kumari",
      rating: 4.5,
      date: "2024.03.02",
      comment:
        "My stay at the Grand Vista Hotel was absolutely incredible! From the moment I checked in, I was greeted with warmth and professionalism. The room was immaculate, the amenities top-notch, and the service was exceptional. Pure luxury and comfort. I can't wait to return!",
      imageUrl: "/testi.png",
    },
    {
      name: "Agnes Remi",
      rating: 4.5,
      date: "2024.03.02",
      comment:
        "My stay at the Grand Vista Hotel was absolutely incredible! I was impressed with the level of service, greeted with warmth and professionalism. The room was immaculate, the amenities top-notch, and the service was exceptional. Pure luxury and comfort. I can't wait to return!",
      imageUrl: "/testi.png",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      // Calculate width of two cards plus gap
      const cardWidth = 489; // 30.56rem in pixels
      const gap = 24; // 6 in pixels
      const scrollAmount = (cardWidth * 2) + gap;
      
      if (direction == "left") {
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
    <section className="py-20 px-20 pb-[12rem] relative">
      <div className=" mx-auto">
        <h2 className="text-4xl font-serif text-white mb-16 text-start">
          TESTIMONIALS
        </h2>
        <div className="relative w-fit mx-auto">
          <button
            onClick={() => handleScroll("left")}
            className="absolute -left-[4rem] text-[#5C4033] pl-1 rounded-full bg-white shadow-md z-10 hover:scale-110 transition-transform top-[40%] w-[2rem] h-[35px]"
          >
            <ChevronLeft className="" />
          </button>
          <div
            className="overflow-x-hidden no-scrollbar select-none flex gap-6 touch-pan-x  max-w-[55rem] mx-auto"
            ref={carouselRef}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#5C4033] rounded-lg p-6 relative h-[25rem] w-[25rem] border"
              >
                <div className="flex  flex-col items-center gap-4 h-full justify-center ">
                  <div className="flex items-center gap-4 ">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <h3 className="text-white font-medium">
                      {testimonial.name}
                    </h3>
                  </div>
                  <div className="">
                    <p className="text-white/80 mt-4 text-sm leading-relaxed w-[22.4rem]">
                      {testimonial.comment}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          {i < testimonial.rating ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                    <span className="text-white/60 text-sm">|</span>
                    <span className="text-white/60 text-sm">
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll("right")}
            className="absolute -right-[4rem] pl-1 top-[40%] bg-white  text-[#5C4033] rounded-full shadow-md z-10 hover:scale-110 transition-transform w-[2rem] h-[35px]"
          >
            <ChevronRight className="" />
          </button>
        </div>
      </div>
      <Image
        src="/small-line.svg"
        alt="Decorative Line"
        width={4}
        height={4}
        className="mx-auto absolute -bottom-[2rem] left-1/2 h-[8rem] "
      />
    </section>
  );
};

export default Testimonials;
