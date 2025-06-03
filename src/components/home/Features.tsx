
import { Check, Target, Users, TrendingUp, Award } from "lucide-react";

const features = [
  {
    title: "Comprehensive Incubation Program",
    description: "6-month intensive program with mentorship, training, and business development support",
    icon: Target
  },
  {
    title: "Seed Funding & Investment",
    description: "Access to funding opportunities from KES 5K to KES 50K for promising startups",
    icon: TrendingUp
  },
  {
    title: "Expert Mentorship Network",
    description: "Connect with successful entrepreneurs and industry leaders across Africa",
    icon: Users
  },
  {
    title: "Proven Track Record",
    description: "Over 200+ startups launched with 85% success rate in first 2 years",
    icon: Award
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose AfriHub Capital</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive support to transform your entrepreneurial vision into a thriving business that creates lasting impact across Africa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
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
