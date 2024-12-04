import React from 'react';
import { Info } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <Info className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">Welcome to Board & Batten Calculator, your trusted resource for precise measurements and calculations in home improvement projects.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h2>
            <p className="text-gray-600">We strive to provide homeowners, contractors, and DIY enthusiasts with accurate tools to plan their board and batten projects efficiently.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Choose Us</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Accurate calculations based on industry standards</li>
              <li>User-friendly interface</li>
              <li>Free to use</li>
              <li>Regular updates and improvements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Expertise</h2>
            <p className="text-gray-600">With years of experience in home improvement and construction, we understand the importance of precise measurements and proper planning.</p>
          </div>
        </div>
      </div>
    </div>
  );
}