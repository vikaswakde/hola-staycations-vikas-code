import Image from "next/image";
import Ellipse from "./Ellipse";
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({ subsets: ["latin"] });

const RevolutionizingHospitality = () => {
  return (
    <section className="py-36 px-36 relative">
      <Ellipse
        className="-top-[10rem] right-[78%] blur-[7rem] z-0"
        opacity={0.7}
      />
      <div className=" mx-auto z-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-between h-full">
            <h2 className="text-5xl font-cinzel text-white capitalize">
              Revolutionizing HOSPITALITY
            </h2>
            <p className={`${lexendDeca.className} text-white/80 leading-relaxed max-w-[486px]`} style={{
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '35px',
              letterSpacing: '0.04em',
              textAlign: 'justify',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}>
              Experience unparalleled luxury and comfort with our villa service,
              where every moment is tailored to exceed your expectations. From
              check-in to your final summary, our villas offer a sanctuary of
              serenity, providing the perfect backdrop for your getaway.
            </p>
            <button className="text-white/60 hover:text-white flex items-center gap-2">
              Read More
              <span className="text-xl">→</span>
            </button>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden pt-28">
              <Image
                src="/hostiptality.png"
                alt="Hospitality Staff"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionizingHospitality;
