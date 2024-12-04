import React from 'react';
import { Wrench, Ruler, DollarSign, LayoutGrid, Settings2, BookOpen } from 'lucide-react';

export default function SeoContent() {
  return (
    <div className="mt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          The Ultimate Board and Batten Calculator Guide
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Wrench className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Professional Planning Tool</h3>
            </div>
            <p className="text-gray-600">Our board and batten calculator provides precise measurements for contractors and DIY enthusiasts alike.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Ruler className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Accurate Measurements</h3>
            </div>
            <p className="text-gray-600">Get exact calculations for your board and batten project with our specialized calculator.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Cost Optimization</h3>
            </div>
            <p className="text-gray-600">Save money by accurately calculating materials needed for your board and batten installation.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <LayoutGrid className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Custom Designs</h3>
            </div>
            <p className="text-gray-600">Plan any board and batten pattern with our versatile calculator tool.</p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center mb-4">
              <Settings2 className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Understanding Board and Batten</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">Board and batten is a timeless architectural element that transforms ordinary walls into stunning features. Our board and batten calculator helps you achieve professional results by providing precise measurements for both vertical and horizontal elements.</p>
              <p className="text-gray-600">Using our board and batten calculator ensures accurate material estimates, preventing costly mistakes and material waste.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Installation Best Practices</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  Use our board and batten calculator to determine exact measurements
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  Consider standard board widths when planning your layout
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  Account for proper spacing between battens using our calculator
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  Plan for corners and transitions with extra material
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Board and Batten Calculator?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Precise measurements for any wall size</li>
            <li>Instant material calculations</li>
            <li>User-friendly interface</li>
            <li>Professional-grade accuracy</li>
            <li>Free to use</li>
          </ul>
        </div>
      </div>
    </div>
  );
}