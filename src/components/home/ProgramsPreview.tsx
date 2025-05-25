
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    id: "pre-incubation",
    title: "Pre-Incubation Program",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop",
    description: "3-month program to validate your business idea and develop a solid foundation",
    path: "/program"
  },
  {
    id: "incubation",
    title: "Full Incubation Program",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=500&auto=format&fit=crop",
    description: "6-month intensive program with mentorship, training, and funding opportunities",
    path: "/program"
  },
  {
    id: "acceleration",
    title: "Acceleration Program",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    description: "Fast-track growth program for established startups ready to scale",
    path: "/program"
  },
  {
    id: "funding",
    title: "Funding & Investment",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=500&auto=format&fit=crop",
    description: "Connect with investors and access funding from seed to Series A",
    path: "/funding"
  },
  {
    id: "mentorship",
    title: "Mentorship Network",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=500&auto=format&fit=crop",
    description: "One-on-one guidance from successful entrepreneurs and industry experts",
    path: "/program"
  },
  {
    id: "community",
    title: "Entrepreneur Community",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
    description: "Join a vibrant community of like-minded entrepreneurs across Africa",
    path: "/about"
  }
];

const ProgramsPreview = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Programs & Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive support designed to take your startup from idea to market success
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
          <Link to="/program">
            <Button className="bg-primary hover:bg-primary-hover text-white">
              View All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
