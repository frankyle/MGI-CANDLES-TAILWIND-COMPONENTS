import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg mt-4">
      <h3 className="text-lg font-bold">Subscribe to Our Newsletter</h3>
      <input
        type="email"
        placeholder="Enter your email"
        className="text-black p-2 w-full mt-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-black text-white px-4 py-2 mt-2" onClick={handleSubscribe}>
        Subscribe
      </button>
    </div>
  );
};

export default Newsletter;
