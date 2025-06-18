
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slideImages = [
  "https://i.postimg.cc/Jnb0fpb6/afr1.jpg",
  "https://i.postimg.cc/3JrNqCW1/afr2.jpg",
  "https://i.postimg.cc/zXdvYbgr/afr3.jpg"
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slideImages.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-custom z-10">
          <div className="max-w-2xl text-white">
            <h5 className="bg-accent text-black inline-block px-3 py-1 rounded text-sm font-medium mb-4">
              EMPOWERING AFRICAN ENTREPRENEURS
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Ideas Into Impactful Businesses
            </h1>
            <p className="text-lg md:text-xl mb-8">
              From Seed Funding to Market Success • Building Africa's Future • One Entrepreneur at a Time
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/program">
                <Button className="bg-primary hover:bg-primary-hover text-white">
                  Explore Program
                </Button>
              </Link>
              <Link to="/apply">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center space-x-2">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
