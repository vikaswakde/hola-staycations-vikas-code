import Link from "next/link";
import Image from "next/image";
import { Lexend_Deca } from 'next/font/google';

const lexendDeca = Lexend_Deca({ subsets: ['latin'], weight: '400' });

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-to-b from-[#1d1c1c] to-[rgba(0,0,0,0)] bg-opacity-30">
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Hola Logo"
            width={40}
            height={40}
            className=""
          />
          <Image
            src="/logo-text.svg"
            alt="Hola Text Logo"
            width={62}
            height={62}
            className="ml-2"
          />
        </div>

        <div className="flex gap-8">
          <Link href="/about" className={`text-white hover:opacity-80 ${lexendDeca.className}`}>
            About us
          </Link>
          <Link href="/featured" className={`text-white hover:opacity-80 ${lexendDeca.className}`}>
            Featured
          </Link>
          <Link href="/locations" className={`text-white hover:opacity-80 ${lexendDeca.className}`}>
            Locations
          </Link>
          <Link href="/faq" className={`text-white hover:opacity-80 ${lexendDeca.className}`}>
            FAQ
          </Link>
        </div>
        <Image
          src="/call.svg"
          alt="call image"
          width={20}
          height={20}
          className="mx-2"
        />
      </div>
    </nav>
  );
};

export default Navbar;
