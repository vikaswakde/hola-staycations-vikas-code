import Image from "next/image";
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({ subsets: ["latin"] });

const WhoAreWe = () => {
  return (
    <section className="py-36 px-36 relative ">
      <div className=" ">
        <Image
          src="/small-line.svg"
          alt="Decorative Line"
          width={4}
          height={4}
          className="mx-auto absolute -top-[3rem] left-1/2 h-[8rem] "
        />
      </div>
      <div className=" mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex  h-full flex-col justify-between">
            <h2 className="text-5xl font-cinzel text-white text-start capitalize">Who are we?</h2>
            <p className={`${lexendDeca.className} text-white/80 leading-relaxed max-w-[486px]`} style={{
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '35px',
              letterSpacing: '0.04em',
              textAlign: 'justify',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}>
              Hola Staycations is a young and dynamic company driven by a simple
              idea: to create a better way to vacation. We believe holidays are
              all about spending quality time with loved ones, away from the
              pressures of daily life. Our team works round the clock to ensure
              the perfect experience for your next staycation, creating unique
              escapes in stunning villas and homestays.
            </p>
            <button className="text-white/60 hover:text-white flex items-center gap-2">
              Read More
              <span className="text-xl">→</span>
            </button>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden pt-28">
              <Image
                src="/who-are-we.png"
                alt="Hospitality Staff"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
          src="/small-line.svg"
          alt="Decorative Line"
          width={4}
          height={4}
          className="mx-auto absolute -bottom-[4.5rem] left-1/2 h-[8rem] "
        />
    </section>
  );
};

export default WhoAreWe;
