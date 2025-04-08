import React from "react";

function Marketings({ data }) {
  const {
    agency,
    clients,
    cultureFocus,
    designStyle,
    keyInsights,
    services,
    website
  } = data;

  return (
    <div className="rounded-2xl shadow-md border border-gray-200 p-6 bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">{agency}</h2>

        <div className="mb-3">
          <p className="text-sm text-gray-500 mb-1">
            <strong className="text-gray-700">Design Style:</strong> {designStyle}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            <strong className="text-gray-700">Culture Focus:</strong> {cultureFocus}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            <strong className="text-gray-700">Clients:</strong> {clients.join(", ")}
          </p>
        </div>

        <div className="mb-3">
          <h3 className="text-sm font-medium text-gray-700 mb-1">Services Offered:</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-gray-600 italic mt-3 border-t pt-3">
          “{keyInsights}”
        </p>
      </div>

      <div className="mt-6">
        <button className="w-full bg-indigo-600 text-white text-sm font-medium py-2 rounded-xl hover:bg-indigo-700 transition">
         <a href={website}> View Profile</a>
        </button>
      </div>
    </div>
  );
}

export default Marketings;
