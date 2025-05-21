
import { Check } from "lucide-react";

const features = [
  {
    title: "Accredited by TVET, KNEC, CBET",
    description: "Our programs meet the highest industry and educational standards"
  },
  {
    title: "3 Convenient Campuses",
    description: "Located in Nairobi, Machakos, and Kitui for accessibility"
  },
  {
    title: "Job Placement & Attachments",
    description: "Graduate with real-world experience and employment opportunities"
  },
  {
    title: "Experienced Trainers",
    description: "Learn from industry professionals with hands-on practical sessions"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Kasarani Catering and Beauty College, we provide quality education that prepares you for the real world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
