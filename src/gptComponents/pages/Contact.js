import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="border p-2 w-full" onChange={handleChange} value={formData.name} />
        <input type="email" name="email" placeholder="Your Email" className="border p-2 w-full" onChange={handleChange} value={formData.email} />
        <textarea name="message" placeholder="Your Message" className="border p-2 w-full" rows="4" onChange={handleChange} value={formData.message} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
