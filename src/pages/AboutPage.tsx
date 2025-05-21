
import { MapPin } from "lucide-react";

const AboutPage = () => {
  const trainers = [
    {
      name: "Jane Mwangi",
      role: "Head of Cosmetology",
      bio: "15+ years in the beauty industry, specializing in professional makeup and skincare",
      image: "https://randomuser.me/api/portraits/women/17.jpg"
    },
    {
      name: "John Kamau",
      role: "Chief Culinary Instructor",
      bio: "Former head chef with international hotel experience and culinary arts degree",
      image: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      name: "Elizabeth Nduta",
      role: "Baking Technology Instructor",
      bio: "Award-winning pastry chef with expertise in cake decoration and bread making",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      name: "David Ochieng",
      role: "ICT Department Head",
      bio: "Technology specialist with over 10 years teaching computer applications",
      image: "https://randomuser.me/api/portraits/men/29.jpg"
    }
  ];

  const campuses = [
    {
      name: "Githurai 45 Campus",
      location: "Nairobi",
      landmark: "Near Equity Bank",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "ACK Cathedral Campus",
      location: "Machakos",
      landmark: "Within ACK Cathedral grounds",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Kitui Campus",
      location: "Kitui",
      landmark: "Opposite Parkside Villa",
      image: "https://images.unsplash.com/photo-1565665681743-6ee054b8250e?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">About Kasarani Catering & Beauty College</h1>
            <p className="text-xl text-gray-700 mb-8">
              Empowering students with practical skills for successful careers since our foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4 text-gray-700">
                KCBC was founded to bridge the gap between talent and opportunity. With a vision to 
                provide affordable, quality education in the beauty and hospitality industries, we 
                established our first campus in Githurai 45, Nairobi.
              </p>
              <p className="mb-4 text-gray-700">
                Over the years, we've expanded to Machakos and Kitui counties, bringing our unique 
                approach to practical education to more communities. Our focus remains on equipping 
                students with job-ready skills and fostering entrepreneurship.
              </p>
              <p className="text-gray-700">
                Today, thousands of our graduates are successful professionals and business owners, 
                contributing to the hospitality and beauty sectors across Kenya and beyond.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Students in classroom"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h3>
              <p className="text-gray-700">
                "To be a premier institution for practical training in beauty, hospitality, and 
                professional development."
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-700">
                "To deliver quality, affordable, and industry-relevant training that equips 
                students for self-reliance and employment."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Trainers */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Trainers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced instructors bring real-world expertise to the classroom
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{trainer.name}</h3>
                  <p className="text-primary text-sm mb-3">{trainer.role}</p>
                  <p className="text-gray-600 text-sm">{trainer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campuses */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Campuses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conveniently located facilities across three counties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campuses.map((campus, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={campus.image} 
                    alt={campus.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{campus.name}</h3>
                  <div className="flex items-start mt-3">
                    <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{campus.location}</p>
                      <p className="text-gray-600 text-sm">{campus.landmark}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
