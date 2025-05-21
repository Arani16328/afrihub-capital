
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    id: "beauty",
    title: "Beauty & Hairdressing",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=500&auto=format&fit=crop",
    description: "Master the art of cosmetology, hairdressing, and beauty therapy",
    path: "/courses#beauty"
  },
  {
    id: "catering",
    title: "Catering & Hospitality",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=500&auto=format&fit=crop",
    description: "Learn the skills to excel in the food and accommodation industry",
    path: "/courses#catering"
  },
  {
    id: "baking",
    title: "Baking Technology",
    image: "https://images.unsplash.com/photo-1556471013-0001958d2f12?q=80&w=500&auto=format&fit=crop",
    description: "Perfect your baking and decoration techniques for cakes and pastries",
    path: "/courses#baking"
  },
  {
    id: "ict",
    title: "ICT & Front Office",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500&auto=format&fit=crop",
    description: "Develop computer skills and front office management expertise",
    path: "/courses#ict"
  },
  {
    id: "nutrition",
    title: "Nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=500&auto=format&fit=crop",
    description: "Study the science of food and its impact on human health",
    path: "/courses#nutrition"
  },
  {
    id: "barista",
    title: "Barista Training",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=500&auto=format&fit=crop",
    description: "Master the art of coffee preparation and service",
    path: "/courses#barista"
  }
];

const ProgramsPreview = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of courses designed to give you practical skills and industry knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div key={program.id} className="group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link to={program.path} className="inline-flex items-center text-primary hover:text-primary-hover">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/courses">
            <Button className="bg-primary hover:bg-primary-hover text-white">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
