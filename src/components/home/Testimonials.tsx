
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "AfriHub Capital transformed my mama mboga business into a thriving enterprise. The mentorship and funding were game-changers for my vegetable stall.",
    name: "Grace Wanjiku",
    role: "Owner, Wanjiku Fresh Vegetables",
    avatar: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg"
  },
  {
    id: 2,
    quote: "The 6-month incubation program gave me the tools and network I needed to scale my boda boda business across three counties in Kenya.",
    name: "Samuel Kiprop",
    role: "Founder, Boda Connect Kenya",
    avatar: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg"
  },
  {
    id: 3,
    quote: "From a small hardware shop to a regional supplier, AfriHub Capital has been with us every step of the way. Now we're impacting thousands of construction workers.",
    name: "Catherine Nyong'o",
    role: "Co-founder, Build Kenya Hardware",
    avatar: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-primary/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from local Kenyan entrepreneurs who have transformed their lives and communities through our programs
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="p-8 bg-white rounded-lg shadow-lg relative">
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              <p className="text-lg italic mb-6 pt-4 px-4">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-300 mr-4 hover:bg-primary hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-300 ml-4 hover:bg-primary hover:text-white transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
