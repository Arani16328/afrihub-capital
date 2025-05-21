
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "I joined KCBC for cosmetology and now I run my own salon in Nairobi. The hands-on training gave me confidence to start my business.",
    name: "Grace M.",
    role: "Salon Owner",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg"
  },
  {
    id: 2,
    quote: "The hospitality diploma gave me a head start in my hotel career. I now work at a 5-star hotel thanks to the practical skills I gained.",
    name: "John M.",
    role: "Hotel Manager",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    quote: "The baking technology course transformed my hobby into a profitable business. The instructors were supportive and knowledgeable.",
    name: "Sarah K.",
    role: "Bakery Owner",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
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
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our graduates who have transformed their lives through our programs
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
