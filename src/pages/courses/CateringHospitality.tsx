
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CateringHospitality = () => {
  return (
    <main className="pt-32 pb-16">
      <div className="container-custom">
        <Link to="/courses" className="flex items-center text-primary hover:text-primary-hover mb-6">
          <ArrowLeft className="mr-2" size={18} />
          Back to all courses
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">School of Catering & Hospitality</h1>
          <p className="text-gray-600 max-w-3xl">
            Our catering and hospitality programs provide comprehensive training to help you excel in the food
            service and accommodation industry, with practical sessions twice weekly.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Diploma in Catering & Accommodation */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-4">Diploma in Catering & Accommodation</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">30 Months</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">KNEC Examined</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">C- Minimum</span>
              </div>
              <p className="text-gray-600 mb-6">
                Our comprehensive diploma program prepares you for management positions in hotels, restaurants, and
                catering establishments. The curriculum includes food preparation, service techniques, and 
                accommodation management.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Fee Structure</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex justify-between border-b pb-2">
                  <span>Monthly Fee</span>
                  <span className="font-medium">Ksh 7,000</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Practical Sessions</span>
                  <span className="font-medium">2x weekly</span>
                </li>
              </ul>
            </div>
            
            {/* Certificate in Catering & Accommodation */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-4">Certificate in Catering & Accommodation</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">18 Months</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">KNEC Examined</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">D Minimum</span>
              </div>
              <p className="text-gray-600 mb-6">
                This certificate program provides foundational knowledge and skills in food service and 
                accommodation management. It's perfect for those looking to start a career in the hospitality industry.
              </p>
            </div>
            
            {/* Food & Beverage Certificate */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-4">Food & Beverage Certificate</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">3 Months / 2 Months</span>
              </div>
              <p className="text-gray-600 mb-6">
                Specialize in food and beverage service with this focused certificate program. Learn 
                professional serving techniques, beverage preparation, and customer service excellence.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Fee Structure</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex justify-between border-b pb-2">
                  <span>3 Months Program</span>
                  <span className="font-medium">Ksh 15,000 per month</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>2 Months Program</span>
                  <span className="font-medium">Ksh 32,000 total</span>
                </li>
              </ul>
            </div>
            
            {/* Cookery Certificate */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Cookery Certificate</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">6 Months</span>
              </div>
              <p className="text-gray-600 mb-6">
                Our cookery certificate focuses on food preparation techniques, menu planning, and kitchen management.
                Perfect for aspiring chefs and those interested in culinary arts.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Fee Structure</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex justify-between border-b pb-2">
                  <span>Monthly Fee</span>
                  <span className="font-medium">Ksh 6,000</span>
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
                  <span>Nationally recognized qualification</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Modern kitchen facilities</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Industry experienced trainers</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Regular practical sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CateringHospitality;
