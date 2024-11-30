import Image from "next/image";
import Ellipse from "./Ellipse";


const CtaSection = () => {
  return (
    <section className="text-center py-[5rem]">
      <div className="relative">
        <Ellipse className="-top-[1rem] left-[30%] blur-3xl opacity-50" />
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <Image
          src="/line.svg"
          alt="Decorative Line"
          width={4}
          height={4}
          className="mx-auto"
        />
        <h2 className="text-4xl md:text-4xl max-w-[39rem] font-cinzel text-white mb-8 text-center  mx-auto">
          Experience the <br />Elegance of a Perfect Staycation
        </h2>
        <Image
          src="/line.svg"
          alt="Decorative Line"
          width={4}
          height={4}
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default CtaSection;
