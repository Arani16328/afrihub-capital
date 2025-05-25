
import { CheckCircle, Target, Eye, Users } from "lucide-react";

const AboutPage = () => {
  const team = [
    {
      name: "Dr. Samuel Kiprotich",
      role: "CEO & Founder",
      bio: "15+ years in venture capital and startup ecosystem development across East Africa",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Grace Wanjiku",
      role: "Investment Director",
      bio: "Former investment banker with expertise in African startup financing and growth strategies",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Ochieng",
      role: "Program Director",
      bio: "Serial entrepreneur and startup mentor with 3 successful exits in the African market",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Fatima Al-Rashid",
      role: "Strategic Advisor",
      bio: "International development expert specializing in African economic growth and innovation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const milestones = [
    { year: "2019", event: "AfriHub Capital founded with a vision to empower African entrepreneurs" },
    { year: "2020", event: "First cohort of 10 startups incubated, raising KES 50M in total funding" },
    { year: "2021", event: "Expanded operations across Kenya, Uganda, and Tanzania" },
    { year: "2022", event: "100th startup milestone reached with 85% success rate" },
    { year: "2023", event: "Launched AI-powered screening and launched Green Tech initiative" },
    { year: "2024", event: "Portfolio companies achieve KES 2B+ in combined valuation" }
  ];

  const partners = [
    "Safaricom",
    "KCB Bank",
    "Equity Bank",
    "Microsoft Africa",
    "Google for Startups",
    "USAID",
    "African Development Bank",
    "Mastercard Foundation"
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About AfriHub Capital
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're building the future of African entrepreneurship, one startup at a time. 
              Our mission is to identify, fund, and accelerate the next generation of businesses 
              that will drive Africa's economic transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To become Africa's leading startup incubator, fostering innovation and entrepreneurship 
                that creates sustainable economic growth and social impact across the continent.
              </p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To provide African entrepreneurs with the funding, mentorship, and ecosystem support 
                needed to transform innovative ideas into scalable businesses that solve real problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a bold vision to Africa's premier startup incubator
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg mr-6 flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders committed to driving African innovation and entrepreneurship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with leading organizations to create a thriving startup ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                <span className="text-gray-600 font-medium text-center">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Measuring success through the growth and impact of our portfolio companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <p className="text-blue-100">Startups Incubated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">87%</div>
              <p className="text-blue-100">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">KES 2.5B+</div>
              <p className="text-blue-100">Total Funding Raised</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <p className="text-blue-100">Jobs Created</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
