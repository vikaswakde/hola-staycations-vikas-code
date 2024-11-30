import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: '400' });

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/hero.png)',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #331906 0.2%, rgba(69, 59, 59, 0) 35.29%, rgba(45, 31, 31, 0) 68.19%, #331906 100%)'
        }} />
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="flex items-end h-full px-4 pb-4">
          <h1 className={`text-5xl md:text-7xl ${cinzel.className} text-white mb-6`}>
            Transform your Staycation Game
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;