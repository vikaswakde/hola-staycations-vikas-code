import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-white pt-16 pb-4 px-10 relative">
      <div className="max-w-6xl mx-auto z-50 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {/* Location Info */}
          <div className="col-span-2">
            <h3 className="font-bold mb-4">Pune</h3>
            <p className="text-sm text-white/60 mb-4">
              AB Chowk Block Shivnear Villa
              <br />
              Pune, India
            </p>
            <div className="space-y-2">
              <p className="text-sm flex items-center gap-2">
                <span>Home: (+91) 932 566 2104</span>
              </p>
              <p className="text-sm flex items-center gap-2">
                <span>Office: (+91) 955 254 3840</span>
              </p>
              <p className="text-sm flex items-center gap-2">
                <span>Email: ashcnufnc124@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="z-50">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/home"
                className="block text-white/60 hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-white/60 hover:text-white"
              >
                About
              </Link>
              <Link
                href="/featured"
                className="block text-white/60 hover:text-white"
              >
                Featured
              </Link>
              <Link
                href="/locations"
                className="block text-white/60 hover:text-white"
              >
                Locations
              </Link>
              <Link
                href="/faq"
                className="block text-white/60 hover:text-white"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-white/60 hover:text-white">
                Facebook
              </Link>
              <Link href="#" className="block text-white/60 hover:text-white">
                Twitter
              </Link>
              <Link href="#" className="block text-white/60 hover:text-white">
                LinkedIn
              </Link>
              <Link href="#" className="block text-white/60 hover:text-white">
                Instagram
              </Link>
            </div>
          </div>

          {/* Newsletter */}
        </div>
          <div className="bg-blue-100 bg-opacity-10 flex py-2 mt-5 justify-around items-center rounded-md ">
            <h3 className="font-bold text-white text-2xl ">Write to us</h3>
            <div className="flex bg-white p-2 w-[75%] rounded-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-black px-4 py-2 rounded-l-lg flex-1 outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Submit
              </button>
            </div>
          </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center flex items-center justify-between">
          <div className="flex items-center justify-start w-fit">
            <Image
              src="/logo.svg"
              alt="Hola Logo"
              width={100}
              height={20}
              className="mx-auto mb-4 max-h-[3rem]"
            />
            <Image
              src="/logo-text.svg"
              alt="Hola Logo"
              width={100}
              height={20}
              className="mx-auto mb-4 max-h-[4rem]"
            />
          </div>
          <p>© 2024 Hola Staycations • All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
