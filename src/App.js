import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./gptComponents/components/Header";
import Hero from "./gptComponents/components/Hero";
import AboutStrategy from "./gptComponents/components/AboutStrategy";
import RecentAnalysis from "./gptComponents/components/RecentAnalysis";
import WhyFollow from "./gptComponents/components/WhyFollow";
import Pricing from "./gptComponents/components/Pricing";
import Footer from "./gptComponents/components/Footer";
import BlogList from "./gptComponents/pages/BlogList";
import BlogPost from "./gptComponents/pages/BlogPost";
import Strategy from "./gptComponents/pages/Strategy";
import TradeTracker from "./gptComponents/pages/TradeTracker";
import Gallery from "./gptComponents/pages/Gallery";
import About from "./gptComponents/pages/About";
import Contact from "./gptComponents/pages/Contact";

// Admin Panel Components
import AdminDashboard from "./gptComponents/admin/AdminDashboard";
import ManagePosts from "./gptComponents/admin/ManagePosts";
import ManageUsers from "./gptComponents/admin/ManageUsers";
import ManageComments from "./gptComponents/admin/ManageComments";
import CreatePost from "./gptComponents/admin/CreatePost";
import EditPost from "./gptComponents/admin/EditPost";
import Features from "./gptComponents/components/Features";
import TradeRecordsClientsTable from "./MGI/TradeRecordsClientsTable";
import ContactUs from "./gptComponents/components/ContactUs";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      
      <main className="flex-grow w-full px-4">
        <Routes>
          {/* Public Blog Routes */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features/>
                <AboutStrategy />
                <RecentAnalysis />
                <WhyFollow />
                <Pricing />
                <ContactUs />
              </>
            }
          />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/trade-tracker" element={<TradeTracker />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/risk-management" element={<TradeRecordsClientsTable />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/posts" element={<ManagePosts />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/comments" element={<ManageComments />} />
          <Route path="/admin/create-post" element={<CreatePost />} />
          <Route path="/admin/edit-post/:id" element={<EditPost />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};


export default App;