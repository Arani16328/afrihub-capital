
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, Award } from "lucide-react";

const HomePage = () => {
  const features = [
    {
      title: "Smart Application Portal",
      description: "Streamlined application process with intelligent form validation",
      icon: Target
    },
    {
      title: "AI-Powered Screening",
      description: "Advanced screening algorithms for faster startup evaluation",
      icon: TrendingUp
    },
    {
      title: "Real-Time Dashboards",
      description: "Track your progress and milestones in real-time",
      icon: Users
    },
    {
      title: "Business Toolkits",
      description: "Downloadable resources and templates for startup success",
      icon: Award
    }
  ];

  const sectors = [
    { name: "Agriculture", icon: "🌾" },
    { name: "Transport", icon: "🚗" },
    { name: "Green Energy", icon: "🌱" },
    { name: "Retail", icon: "🛍️" },
    { name: "Grocery", icon: "🥬" }
  ];

  const testimonials = [
    {
      quote: "AfriHub Capital transformed our idea into a thriving business. The mentorship and funding were game-changers.",
      founder: "Sarah Kimani",
      company: "GreenTech Solutions",
      year: "2023"
    },
    {
      quote: "The 6-month program gave us the structure and connections we needed to scale rapidly across East Africa.",
      founder: "David Mwangi",
      company: "LogiFlow Transport",
      year: "2024"
    },
    {
      quote: "From prototype to market leader in 18 months. AfriHub's ecosystem made it possible.",
      founder: "Grace Wanjiku",
      company: "FarmLink Digital",
      year: "2023"
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Africa's
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"> Entrepreneurs</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                From Ideas to Impact
              </p>
              <p className="text-lg mb-10 text-blue-200 max-w-lg">
                Join Africa's premier startup incubator. We provide seed funding, mentorship, and the ecosystem you need to build the next generation of African businesses.
              </p>
              <Link to="/apply">
                <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="African entrepreneurs at work"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">Success Rate</p>
                <p className="text-2xl font-bold text-green-600">87%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Problem */}
            <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-6 text-red-800">Why 70% of African Startups Fail</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">❌</span>
                  <span>Lack of early-stage funding and investment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">❌</span>
                  <span>Limited access to experienced mentors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">❌</span>
                  <span>Poor market validation and business planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">❌</span>
                  <span>Insufficient business development support</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-6 text-green-800">How AfriHub Changes That</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>KES 5K - 2M seed funding with 5-10% equity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>1-on-1 mentorship from industry experts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive 6-month acceleration program</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Demo Day investor pitch opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AfriHub Capital</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to transform your startup idea into a successful business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Snapshot */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Focus Sectors</h2>
            <p className="text-xl text-gray-600 mb-8">
              We specialize in startups that drive Africa's economic growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-2">{sector.icon}</div>
                <h3 className="font-semibold">{sector.name}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/program">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Explore the Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from founders who've transformed their ideas into thriving businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.founder}</p>
                  <p className="text-blue-600">{testimonial.company}</p>
                  <p className="text-gray-500 text-sm">Cohort {testimonial.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Turn your idea into Africa's next big success story
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our next cohort of innovative startups and get the funding, mentorship, and network you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Apply as a Startup
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold">
                Join as a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
