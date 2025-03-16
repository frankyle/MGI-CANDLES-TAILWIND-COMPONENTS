import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+255764998891" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white font-bold text-sm py-2 px-4 rounded-full shadow-lg transform hover:scale-110 transition-transform flex items-center space-x-2"
    >
      {/* Smaller WhatsApp Icon */}
      <FaWhatsapp size={18} /> {/* Adjusted icon size */}
      <span className="text-xs">WhatsApp Me</span> {/* Smaller text */}
    </a>
  );
};

export default FloatingWhatsAppButton;
