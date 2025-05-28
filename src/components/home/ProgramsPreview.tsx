
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    id: "pre-incubation",
    title: "Pre-Incubation Program",
    image: "https://i.postimg.cc/Jnb0fpb6/afr1.jpg",
    description: "3-month program to validate your business idea and develop a solid foundation",
    path: "/programs/pre-incubation"
  },
  {
    id: "incubation",
    title: "Full Incubation Program",
    image: "https://i.postimg.cc/3JrNqCW1/afr2.jpg",
    description: "6-month intensive program with mentorship, training, and funding opportunities",
    path: "/programs/incubation"
  },
  {
    id: "acceleration",
    title: "Acceleration Program",
    image: "https://i.postimg.cc/zXdvYbgr/afr3.jpg",
    description: "Fast-track growth program for established startups ready to scale",
    path: "/programs/acceleration"
  },
  {
    id: "funding",
    title: "Funding & Investment",
    image: "https://i.postimg.cc/Hnzxxjvb/afr4.jpg",
    description: "Connect with investors and access funding from seed to Series A",
    path: "/programs/funding"
  },
  {
    id: "mentorship",
    title: "Mentorship Network",
    image: "https://i.postimg.cc/Zn4n46HT/afr5.jpg",
    description: "One-on-one guidance from successful entrepreneurs and industry experts",
    path: "/programs/mentorship"
  },
  {
    id: "community",
    title: "Entrepreneur Community",
    image: "https://i.postimg.cc/DfPm5Yfm/afr7.jpg",
    description: "Join a vibrant community of like-minded entrepreneurs across Africa",
    path: "/programs/community"
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
