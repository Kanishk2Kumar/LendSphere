import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-white to-blue-50 py-16 mt-20">
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight font-sans">
          Loans, investments, crypto <span className="text-blue-600">rewards!</span>
          </h1>
          <p className="mt-4 mr-12 text-gray-700 text-lg font-serif">
          Our platform connects borrowers and investors in a transparent marketplace, enabling 
          easy loan applications and stable bond investments. With blockchain technology 
          and crypto-based loyalty rewards, we ensure secure transactions and incentivize 
          responsible borrowing. Join us to experience a revolutionary financial ecosystem 
          for growth and trust!
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full transition-transform transform hover:scale-105 hover:bg-blue-600 hover:text-white shadow-lg">
            <Link href="/get_started" className="transition-colors">
              Get Started 
            </Link>
          </button>
        </div>

        {/* Right Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 relative">
          <img src="/HeroImage.png" alt="Hero Image" className="" />
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-10 text-center flex-col">
        <div className="hero_globe_body_text">Trusted by <span>8 countries</span> and counting...</div>
        <div className="mt-4 flex justify-center space-x-4">
          <img src="/flags/hongkong.png" alt="Hong Kong" className="w-6 h-6" />
          <img src="/flags/uk.png" alt="UK" className="w-6 h-6" />
          <img src="/flags/japan.png" alt="Japan" className="w-6 h-6" />
          <img src="/flags/india.png" alt="India" className="w-6 h-6" />
          <img src="/flags/usa.png" alt="USA" className="w-6 h-6" />
          <img src="/flags/canada.png" alt="Canada" className="w-6 h-6" />
          <img src="/flags/china.png" alt="China" className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
