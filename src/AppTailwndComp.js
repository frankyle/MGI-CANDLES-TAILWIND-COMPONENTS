import React from 'react';
import Header from './components/Tailwind-components/Header';
import Footer from './components/Footer';
import Hero from './components/Tailwind-components/Hero';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'; // Import the button component
import Features from './components/Tailwind-components/Features';
import Pricing from './components/Tailwind-components/Pricing';
import NewsLetter from './components/Tailwind-components/NewsLetter';
import Blog from './components/Tailwind-components/Blog';
import BlogDetails from './components/Tailwind-components/BlogDetails';
import Contact from './components/Tailwind-components/Contact';
import Categories from './components/Tailwind-components/Categories';
import Banners from './components/Tailwind-components/Banners';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Banners />
      <Pricing />
      <Categories />
      <NewsLetter />
      <Blog />
      <BlogDetails />
      <Contact />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
