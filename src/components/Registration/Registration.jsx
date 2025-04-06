import React from "react";
import Guidelines from "./Guidelines";

const Registration = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Registration Closed
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Thank you for the overwhelming response! We’ve closed registrations for now.
      </p>
      <p className="text-base text-gray-500">
        Stay tuned for more updates. We can’t wait to see what’s next!
      </p>

      {/* Keep Guidelines as it is */}
      <div className="mt-10">
        <Guidelines />
      </div>
    </div>
  );
};

export default Registration;
