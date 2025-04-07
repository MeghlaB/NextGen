import React from "react";

function Services() {
  return (
    <div className="">
      <div className="text-2xl font-bold text-center py-5">
        <h1 className="text-yellow-500">Our Services</h1>
      </div>
      {/* Grid  */}
      <div className="container mx-auto grid grid-cols-3 gap-4">
        {/* grid 1 - Web Service */}
        <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h1 className="text-xl font-semibold mb-4">Web Service</h1>
          <p className="mb-4">We provide comprehensive web development solutions to help businesses build robust online platforms.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all">Learn More</button>
        </div>

        {/* grid 2 - Graphics Design */}
        <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h1 className="text-xl font-semibold mb-4">Graphics Design</h1>
          <p className="mb-4">We offer creative graphic design services to bring your brand's visual identity to life.</p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-all">Explore</button>
        </div>

        {/* grid 3 - Marketing */}
        <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h1 className="text-xl font-semibold mb-4">Marketing</h1>
          <p className="mb-4">We provide data-driven marketing strategies to help your business reach its target audience effectively.</p>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-all">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
