import { ArrowRight, ArrowRightSquare } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

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
          <p className="mb-4">
            We provide comprehensive web development solutions to help
            businesses build robust online platforms.
          </p>
          <Link
            to={"/webservice"}
            className=" text-blue-600 underline py-2 px-4 rounded  transition-all flex items-center"
          >
            Learn More
            <ArrowRight size={"20px"} className="hover:scale-x-70 underline" />
          </Link>
        </div>

        {/* grid 2 - Graphics Design */}
        <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h1 className="text-xl font-semibold mb-4">Graphics Design</h1>
          <p className="mb-4">
            We offer creative graphic design services to bring your brand's
            visual identity to life.
          </p>

          <Link
            to={"/graphic-design"}
            className=" py-2 px-4 rounded transition-all underline text-blue-600 flex items-center "
          >
            Explore
            <ArrowRight size={"20px"} className="hover:scale-x-70 underline" />
          </Link>
        </div>

        {/* grid 3 - Marketing */}
        <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h1 className="text-xl font-semibold mb-4">Marketing</h1>
          <p className="mb-4">
            We provide data-driven marketing strategies to help your business
            reach its target audience effectively.
          </p>
          <Link
            to={"/marketing"}
            className="text-blue-600 flex items-center underline py-2 px-4 rounded  transition-all"
          >
            Get Started
            <ArrowRight size={"20px"} className="hover:scale-x-70 underline" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
