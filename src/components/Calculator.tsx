import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

export default function Calculator() {
  const [wallHeight, setWallHeight] = useState('');
  const [wallWidth, setWallWidth] = useState('');
  const [battenSpacing, setBattenSpacing] = useState('16');
  const [results, setResults] = useState<null | {
    totalBattens: number;
    totalBoards: number;
    totalLength: number;
  }>(null);

  const calculateMaterials = (e: React.FormEvent) => {
    e.preventDefault();
    const height = parseFloat(wallHeight);
    const width = parseFloat(wallWidth);
    const spacing = parseFloat(battenSpacing);

    const numberOfVerticalBattens = Math.ceil(width / spacing) + 1;
    const totalBattenLength = (numberOfVerticalBattens * height) + (width * 2); // Vertical + horizontal
    const numberOfBoards = Math.ceil(width / 4); // Assuming 4ft wide boards

    setResults({
      totalBattens: numberOfVerticalBattens + 2, // Adding top and bottom battens
      totalBoards: numberOfBoards,
      totalLength: totalBattenLength
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <CalcIcon className="h-8 w-8 text-blue-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-900">Board & Batten Calculator</h1>
      </div>

      <form onSubmit={calculateMaterials} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Wall Height (feet)</label>
          <input
            type="number"
            value={wallHeight}
            onChange={(e) => setWallHeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="0"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Wall Width (feet)</label>
          <input
            type="number"
            value={wallWidth}
            onChange={(e) => setWallWidth(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="0"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Batten Spacing (inches)</label>
          <select
            value={battenSpacing}
            onChange={(e) => setBattenSpacing(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="12">12 inches</option>
            <option value="16">16 inches</option>
            <option value="24">24 inches</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Calculate Materials
        </button>
      </form>

      {results && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Results</h2>
          <div className="space-y-2">
            <p>Number of Battens Needed: {results.totalBattens}</p>
            <p>Number of Boards Needed: {results.totalBoards}</p>
            <p>Total Linear Feet of Battens: {results.totalLength.toFixed(2)} ft</p>
          </div>
        </div>
      )}
    </div>
  );
}