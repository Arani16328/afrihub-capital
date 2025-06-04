
import { CheckCircle, Target, Eye, Users } from "lucide-react";

const AboutPage = () => {
  const team = [
    {
      name: "Mr. Peter Mohagachi",
      role: "CEO & Founder",
      bio: "Experienced entrepreneur and startup ecosystem developer committed to empowering local Kenyan businesses",
      image: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg"
    },
    {
      name: "Mrs. Juliana Mogendi",
      role: "Investment Director",
      bio: "Former investment banker with expertise in African startup financing and growth strategies",
      image: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg"
    },
    {
      name: "Mr. Paul Mohegete",
      role: "Operations Manager",
      bio: "Operations expert with deep understanding of local business challenges and solutions",
      image: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg"
    },
    {
      name: "Christine Ghati",
      role: "Marketing & Sales Manager",
      bio: "Marketing professional specializing in reaching and engaging local Kenyan entrepreneurs",
      image: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg"
    },
    {
      name: "Mr. Philbert Burudi",
      role: "International Relations Manager",
      bio: "International development expert facilitating partnerships and cross-border opportunities",
      image: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg"
    },
    {
      name: "Mr. Samson Otieno",
      role: "Finance & Accounting Manager",
      bio: "Financial expert ensuring transparent and efficient fund management for our entrepreneurs",
      image: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg"
    },
    {
      name: "Miss. Naomi",
      role: "Entrepreneurship Program Coordinator",
      bio: "Program coordinator dedicated to supporting local entrepreneurs through their business journey",
      image: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg"
    },
    {
      name: "Patrick Chalo",
      role: "ICT & Communication Officer",
      bio: "Technology expert ensuring seamless communication and digital infrastructure for our programs",
      image: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg"
    },
    {
      name: "Dr. Mary Anai",
      role: "Strategic Advisor",
      bio: "Strategic advisor specializing in African economic development and local business growth",
      image: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg"
    }
  ];

  const milestones = [
    { year: "2022", event: "AfriHub Capital founded with a vision to empower local Kenyan entrepreneurs" },
    { year: "2023", event: "First cohort of 10 startups incubated, raising KES 2M in total funding" },
    { year: "2024", event: "Expanded operations across other counties in Kenya, planning East Africa expansion" },
    { year: "2025", event: "Portfolio companies achieve KES 50M+ in combined valuation" }
  ];

  const partners = [
    {
      name: "Safaricom",
      logo: "https://i.postimg.cc/FsV7DrKB/SAF-MAIN-LOGO.jpg"
    },
    {
      name: "Cooperative Bank",
      logo: "https://i.postimg.cc/SRsYMH6K/co-operative-bank-of-kenya-seeklogo.png"
    },
    {
      name: "Kenya Chambers of Commerce",
      logo: "https://i.postimg.cc/yxFkqByW/Kenya-chamber-of-commerce.jpg"
    },
    {
      name: "International Labour Organisation (ILO)",
      logo: "https://i.postimg.cc/5NVXBYfz/international-labour-organization-ilo-seeklogo.png"
    },
    {
      name: "Elimu Master Hub Academy",
      logo: "https://i.postimg.cc/yNbJcLN6/Elimu-Masters-Hub-logo.jpg"
    },
    {
      name: "Jibra Enterprise Company Ltd",
      logo: null
    },
    {
      name: "BSM Crypto Africa Ltd",
      logo: "https://i.postimg.cc/y69J3XCB/BSM-Logo.jpg"
    }
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
              We're building the future of African entrepreneurship, one local business at a time. 
              Our mission is to identify, fund, and accelerate unbankable businesses 
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
                among local, unbankable businesses that create sustainable economic growth and social impact across the African continent.
              </p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To provide local African entrepreneurs with the funding, mentorship, and ecosystem support 
                needed to transform their business ideas into scalable enterprises that solve real community problems.
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
              From a bold vision to Kenya's premier startup incubator for local businesses
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
              Experienced leaders committed to driving Kenyan innovation and local entrepreneurship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Working with leading Kenyan organizations to create a thriving local startup ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 min-h-[120px]">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-16 object-contain"
                  />
                ) : (
                  <span className="text-gray-600 font-medium text-center">{partner.name}</span>
                )}
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
              Measuring success through the growth and impact of our local portfolio businesses
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <p className="text-blue-100">Local Businesses Incubated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">87%</div>
              <p className="text-blue-100">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">KES 60M</div>
              <p className="text-blue-100">Total Funding Raised</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">1,500+</div>
              <p className="text-blue-100">Jobs Created</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in empowering local African entrepreneurs and creating lasting economic and employment opportunities among African youths
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "For Incubation",
              "For Incubation and Seed Funding", 
              "As an NGO",
              "As a Government Entity",
              "As a Donor",
              "As an Investor",
              "As an Entrepreneur Expert",
              "As an Agent in Your Region"
            ].map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-lg mb-2 text-blue-800">{option}</h3>
                <p className="text-gray-600 text-sm">
                  Join our mission to support local African businesses and create economic and employment opportunities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
