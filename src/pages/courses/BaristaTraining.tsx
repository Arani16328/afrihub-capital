
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BaristaTraining = () => {
  return (
    <main className="pt-32 pb-16">
      <div className="container-custom">
        <Link to="/courses" className="flex items-center text-primary hover:text-primary-hover mb-6">
          <ArrowLeft className="mr-2" size={18} />
          Back to all courses
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Barista Training Program</h1>
          <p className="text-gray-600 max-w-3xl">
            Master the art of coffee preparation and service with our specialized barista training program,
            designed to prepare you for a career in the rapidly growing coffee industry.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Barista Course */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-4">Barista Certificate</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">2 Months</span>
              </div>
              <p className="text-gray-600 mb-6">
                Our barista program covers everything you need to know about coffee, from bean selection and
                grinding to brewing techniques and latte art. You'll also learn customer service skills and
                coffee shop operations.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Fee Structure</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex justify-between border-b pb-2">
                  <span>Admission</span>
                  <span className="font-medium">Ksh 1,000</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Maintenance</span>
                  <span className="font-medium">Ksh 1,000</span>
                </li>
              </ul>
            </div>
            
            {/* Course Content */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Program Highlights</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Coffee Knowledge</h3>
                  <p className="text-gray-600">
                    Learn about coffee varieties, origins, roasting methods, and how these factors affect flavor profiles.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Brewing Methods</h3>
                  <p className="text-gray-600">
                    Master various brewing techniques including espresso, pour-over, French press, and cold brew.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Espresso-Based Drinks</h3>
                  <p className="text-gray-600">
                    Prepare classic espresso-based beverages like cappuccino, latte, macchiato, and americano.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Latte Art</h3>
                  <p className="text-gray-600">
                    Develop skills in creating decorative patterns in milk-based espresso drinks.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Customer Service</h3>
                  <p className="text-gray-600">
                    Learn essential communication and service skills for working in a customer-facing environment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Equipment Maintenance</h3>
                  <p className="text-gray-600">
                    Understand how to properly use, clean, and maintain coffee equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 sticky top-32">
              <h3 className="text-xl font-semibold mb-4">Apply Now</h3>
              <p className="text-gray-600 mb-6">
                Ready to start your journey with us? Apply now for our upcoming intake.
              </p>
              <Link to="/admissions">
                <Button className="w-full bg-primary hover:bg-primary-hover mb-4">
                  Apply for this Program
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Contact Us with Questions
                </Button>
              </Link>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Why Choose This Program</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Professional training on commercial equipment</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Hands-on practical experience</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Growing job market in cafes and restaurants</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Entrepreneurship opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BaristaTraining;
