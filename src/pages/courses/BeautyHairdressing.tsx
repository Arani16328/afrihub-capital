
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BeautyHairdressing = () => {
  return (
    <main className="pt-32 pb-16">
      <div className="container-custom">
        <Link to="/courses" className="flex items-center text-primary hover:text-primary-hover mb-6">
          <ArrowLeft className="mr-2" size={18} />
          Back to all courses
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">School of Beauty & Hairdressing</h1>
          <p className="text-gray-600 max-w-3xl">
            Our beauty and hairdressing programs prepare you for success in the beauty industry with
            hands-on training from experienced professionals in modern facilities.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Diploma in Cosmetology */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-4">Diploma in Cosmetology</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">11 Months</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Free Attachment</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Job Placement</span>
              </div>
              <p className="text-gray-600 mb-6">
                Our comprehensive cosmetology program covers skincare, makeup application, nail technology,
                and body treatments. You'll learn from industry experts and gain practical experience
                through hands-on training sessions.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Fee Structure</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex justify-between border-b pb-2">
                  <span>Registration</span>
                  <span className="font-medium">Ksh 1,000</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Tuition</span>
                  <span className="font-medium">Ksh 5,000</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Materials</span>
                  <span className="font-medium">Ksh 2,000</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Maintenance</span>
                  <span className="font-medium">Ksh 500</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Medical</span>
                  <span className="font-medium">Ksh 500</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Apron</span>
                  <span className="font-medium">Ksh 750</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Student ID</span>
                  <span className="font-medium">Ksh 300</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>T-shirt</span>
                  <span className="font-medium">Ksh 1,000</span>
                </li>
              </ul>
            </div>
            
            {/* Diploma in Hairdressing */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Diploma in Hairdressing</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">8 Months</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Free Attachment</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Job Placement</span>
              </div>
              <p className="text-gray-600 mb-6">
                Learn cutting, coloring, styling, and hair treatments from expert stylists. Our program
                includes both classic techniques and the latest trends to prepare you for a successful
                career in the hairdressing industry.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Fee Structure</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex justify-between border-b pb-2">
                  <span>Registration</span>
                  <span className="font-medium">Ksh 1,000</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Tuition</span>
                  <span className="font-medium">Ksh 5,000</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Materials</span>
                  <span className="font-medium">Ksh 2,000</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Maintenance</span>
                  <span className="font-medium">Ksh 500</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Medical</span>
                  <span className="font-medium">Ksh 500</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Apron</span>
                  <span className="font-medium">Ksh 750</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Student ID</span>
                  <span className="font-medium">Ksh 300</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>T-shirt</span>
                  <span className="font-medium">Ksh 1,000</span>
                </li>
              </ul>
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
                  <span>Industry-recognized certification</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Hands-on practical training</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Job placement assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Flexible payment options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BeautyHairdressing;
