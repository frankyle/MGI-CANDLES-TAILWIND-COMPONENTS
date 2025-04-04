import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./gptComponents/components/Navbar";
import Footer from "./gptComponents/components/Footer";
import Home from "./gptComponents/pages/Home";
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
import AdminNavbar from "./gptComponents/admin/AdminNavbar";
import AdminSidebar from "./gptComponents/admin/AdminSidebar";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            {/* Public Blog Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/trade-tracker" element={<TradeTracker />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

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
    </Router>
  );
};

export default App;
