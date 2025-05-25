
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, TrendingUp, Award, BookOpen, Target } from "lucide-react";

const IncubationPage = () => {
  const programDetails = [
    {
      title: "6-Month Accelerator",
      description: "Intensive program designed to rapidly scale your startup from idea to market-ready business",
      icon: Calendar,
      features: ["Weekly milestones", "Progress tracking", "Cohort collaboration", "Demo day preparation"]
    },
    {
      title: "Expert Workshops",
      description: "Comprehensive training covering all aspects of building a successful startup",
      icon: BookOpen,
      features: ["Legal framework setup", "Financial planning", "Brand development", "Marketing strategies"]
    },
    {
      title: "1-on-1 Mentorship",
      description: "Personalized guidance from successful entrepreneurs and industry experts",
      icon: Users,
      features: ["Weekly mentor sessions", "Industry-specific advice", "Network introductions", "Strategic guidance"]
    },
    {
      title: "Demo Day & Pitching",
      description: "Showcase your startup to potential investors and strategic partners",
      icon: TrendingUp,
      features: ["Pitch deck development", "Presentation coaching", "Investor introductions", "Media coverage"]
    }
  ];

  const sectors = [
    {
      name: "Grocery Retail",
      icon: "🛒",
      description: "Digital marketplaces, supply chain optimization, and retail innovation"
    },
    {
      name: "Transport & Logistics",
      icon: "🚛",
      description: "Smart mobility solutions, delivery optimization, and transportation tech"
    },
    {
      name: "Agriculture & AgriTech",
      icon: "🌾",
      description: "Farm management systems, crop optimization, and agricultural innovations"
    },
    {
      name: "Green & Clean Energy",
      icon: "🌱",
      description: "Renewable energy solutions, sustainability tech, and environmental innovation"
    },
    {
      name: "Retail & E-commerce",
      icon: "🛍️",
      description: "Online retail platforms, payment solutions, and commerce enablement"
    },
    {
      name: "FinTech & Banking",
      icon: "💳",
      description: "Digital payments, lending platforms, and financial inclusion solutions"
    }
  ];

  const journeySteps = [
    {
      step: 1,
      title: "Application",
      description: "Submit your startup application through our AI-powered portal",
      duration: "1 week",
      icon: Target
    },
    {
      step: 2,
      title: "Selection",
      description: "AI screening followed by expert panel evaluation and interviews",
      duration: "2 weeks",
      icon: Users
    },
    {
      step: 3,
      title: "Acceleration",
      description: "6-month intensive program with funding, mentorship, and workshops",
      duration: "6 months",
      icon: TrendingUp
    },
    {
      step: 4,
      title: "Demo Day",
      description: "Pitch to investors and partners at our quarterly demo day event",
      duration: "1 day",
      icon: Award
    },
    {
      step: 5,
      title: "Post-Program Support",
      description: "Continued mentorship, follow-on funding, and alumni network access",
      duration: "Ongoing",
      icon: ArrowRight
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Incubation Program
            </h1>
            <p className="text-xl mb-8">
              Designed to scale Africa's next-generation businesses through comprehensive support, 
              expert mentorship, and strategic funding.
            </p>
            <Link to="/apply">
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold text-lg px-8 py-3">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Components</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform your startup idea into a thriving business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programDetails.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Focus On */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sectors We Focus On</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in startups across key sectors driving Africa's economic growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4 text-center">{sector.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-center">{sector.name}</h3>
                <p className="text-gray-600 text-center text-sm">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Incubation Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From application to successful business launch - here's what to expect
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {journeySteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-600 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Success Metrics</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">87%</div>
              <p className="text-gray-600">Graduation Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">KES 15M</div>
              <p className="text-gray-600">Average Funding Raised</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">75%</div>
              <p className="text-gray-600">Still Operating After 2 Years</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">300+</div>
              <p className="text-gray-600">Jobs Created Per Cohort</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Incubated – Applications Open Now
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our next cohort of innovative startups and transform your idea into Africa's next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Submit Application
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold">
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IncubationPage;
