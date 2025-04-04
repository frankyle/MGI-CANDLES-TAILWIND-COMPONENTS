import React from "react";

function Subscription() {
  return (
    <section className="container mx-auto py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-6">Subscribe for Updates</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="border rounded-md p-2 w-full md:w-1/2 mb-4"
      />
      <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
        Subscribe
      </button>
    </section>
  );
}

export default Subscription;