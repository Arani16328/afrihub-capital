
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    id: "beauty",
    title: "Beauty & Hairdressing",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    description: "Master the art of cosmetology, hairdressing, and beauty therapy with our comprehensive programs.",
    path: "/courses/beauty-hairdressing",
    courses: ["Diploma in Cosmetology", "Diploma in Hairdressing"]
  },
  {
    id: "catering",
    title: "Catering & Hospitality",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=800&auto=format&fit=crop",
    description: "Learn the skills to excel in the food and accommodation industry with our practical training programs.",
    path: "/courses/catering-hospitality",
    courses: ["Diploma in Catering & Accommodation", "Certificate in Catering & Accommodation", "Food & Beverage Certificate", "Cookery Certificate"]
  },
  {
    id: "baking",
    title: "Baking Technology",
    image: "https://images.unsplash.com/photo-1556471013-0001958d2f12?q=80&w=800&auto=format&fit=crop",
    description: "Perfect your baking and decoration techniques for cakes and pastries from basic to advanced levels.",
    path: "/courses/baking-technology",
    courses: ["Basic Baking", "Advanced Baking & Decoration", "Professional Baking"]
  },
  {
    id: "ict",
    title: "ICT & Front Office",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    description: "Develop computer skills and front office management expertise for the modern workplace.",
    path: "/courses/ict-front-office",
    courses: ["ICT Certificate", "Front Office Certificate", "Housekeeping Certificate"]
  },
  {
    id: "nutrition",
    title: "Nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
    description: "Study the science of food and its impact on human health with our nationally recognized programs.",
    path: "/courses/nutrition",
    courses: ["Diploma in Nutrition", "Certificate in Nutrition"]
  },
  {
    id: "barista",
    title: "Barista Training",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
    description: "Master the art of coffee preparation and service with our specialized barista training program.",
    path: "/courses/barista-training",
    courses: ["Barista Certificate"]
  }
];

const CoursesPage = () => {
  return (
    <main className="pt-32 pb-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our wide range of courses designed to give you practical skills and industry knowledge
            for a successful career. All programs are nationally recognized and include practical training.
          </p>
        </div>
        
        <div className="space-y-16">
          {programs.map((program) => (
            <section key={program.id} id={program.id} className="scroll-mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{program.title}</h2>
                  <p className="text-gray-600 mb-6">
                    {program.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3">Available Courses:</h3>
                    <ul className="space-y-2">
                      {program.courses.map((course, index) => (
                        <li key={index} className="flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={program.path}
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-hover transition-colors duration-300"
                  >
                    View Program Details
                  </Link>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="rounded-lg overflow-hidden shadow-lg h-72 lg:h-96">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {program.id !== programs[programs.length - 1].id && (
                <hr className="my-12 border-gray-200" />
              )}
            </section>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 p-8 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Ready to Start Your Journey?</h2>
            <p className="text-gray-600">
              Apply now for our upcoming intake or contact us for more information.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/admissions"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-hover transition-colors duration-300"
            >
              Apply Now
            </Link>
            <Link 
              to="/contact"
              className="bg-white border border-primary text-primary px-6 py-3 rounded-md hover:bg-gray-50 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;
