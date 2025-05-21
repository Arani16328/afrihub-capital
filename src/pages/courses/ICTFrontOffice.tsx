import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ICTFrontOffice = () => {
  return (
    <main className="pt-32 pb-16">
      <div className="container-custom">
        <Link to="/courses" className="flex items-center text-primary hover:text-primary-hover mb-6">
          <ArrowLeft className="mr-2" size={18} />
          Back to all courses
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ICT & Front Office Programs</h1>
          <p className="text-gray-600 max-w-3xl">
            Develop essential computer skills and front office management expertise with our specialized
            ICT and front office programs, designed to meet industry demands.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* ICT Certificate */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-4">ICT Certificate</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">2 Months</span>
              </div>
              <p className="text-gray-600 mb-6">
                Our ICT certificate program provides essential computer skills including office applications,
                internet use, basic networking, and computer maintenance. Ideal for beginners and those looking
                to update their skills.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Fee Structure</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex justify-between border-b pb-2">
                  <span>Program Fee</span>
                  <span className="font-medium">Ksh 5,000</span>
                </li>
              </ul>
            </div>
            
            {/* Front Office */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-4">Front Office Certificate</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">6 Months</span>
              </div>
              <p className="text-gray-600 mb-6">
                Learn the essential skills needed for front office operations in hotels, resorts, and business
                settings. This program covers reception duties, booking systems, customer service, and administrative
                tasks.
              </p>
            </div>
            
            {/* Housekeeping */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-4">Housekeeping Certificate</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">6 Months</span>
              </div>
              <p className="text-gray-600 mb-6">
                Our housekeeping program prepares you for roles in hotels, resorts, and facilities management.
                Learn professional cleaning techniques, inventory management, and service standards.
              </p>
            </div>
            
            {/* Cookery */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Cookery Certificate</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">6 Months</span>
              </div>
              <p className="text-gray-600 mb-6">
                Develop fundamental cooking skills and knowledge with our cookery certificate. This program
                covers food preparation techniques, kitchen hygiene, menu planning, and basic nutrition.
              </p>
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
                  <span>Modern computer labs with updated software</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Practical simulation environments</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Industry-experienced instructors</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Job placement assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ICTFrontOffice;
