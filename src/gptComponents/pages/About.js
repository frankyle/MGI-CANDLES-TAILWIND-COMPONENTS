import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('/images/forex-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-5xl mx-auto py-12 px-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Who We Are</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          We are a passionate forex trading community dedicated to helping traders at all levels 
          develop their skills, understand market movements, and build profitable strategies.
        </p>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              Our mission is to empower traders with the right knowledge, tools, and strategies 
              to make informed trading decisions and succeed in the forex market.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-900 mb-4">Core Values</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li><strong>Education:</strong> Continuous learning is key to success.</li>
              <li><strong>Discipline:</strong> Emotion-free trading for consistent growth.</li>
              <li><strong>Transparency:</strong> Sharing insights, wins, and lessons.</li>
              <li><strong>Community:</strong> Supporting traders through shared knowledge.</li>
            </ul>
          </div>
        </div>

        {/* What We Offer */}
        <h3 className="text-3xl font-semibold text-gray-800 mt-12 mb-6 text-center">What We Offer</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-200 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-gray-900">Trading Strategies</h4>
            <p className="text-gray-700 mt-2">Tested forex strategies for different market conditions.</p>
          </div>
          <div className="p-6 bg-gray-200 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-gray-900">Market Analysis</h4>
            <p className="text-gray-700 mt-2">Daily and weekly insights on market movements.</p>
          </div>
          <div className="p-6 bg-gray-200 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-gray-900">Community Support</h4>
            <p className="text-gray-700 mt-2">Join discussions and learn from fellow traders.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Join Our Community</h3>
          <p className="text-lg text-gray-700 mt-2">Start your journey to becoming a successful forex trader.</p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
