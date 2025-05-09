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
import Gallery from "./gptComponents/pages/Gallery";
import About from "./gptComponents/pages/About";
import Contact from "./gptComponents/pages/Contact";

import Features from "./gptComponents/components/Features";
import TradeRecordsClientsTable from "./MGI/TradeRecordsClientsTable";
import ContactUs from "./gptComponents/components/ContactUs";
import Login from "./auth/Login";
import CandleImagesView from "./gptComponents/pages/CandlesImages/CandleImagesView";
import CandleImages from "./gptComponents/pages/CandlesImages/CandleImages";
import TradeDetailsTable from "./gptComponents/pages/TradingDetails/TradeDetailsTable";

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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />


          <Route path="/risk-management" element={<TradeRecordsClientsTable />} />
          {/* <Route path="/trade-tracker" element={<TradeTracker />} /> */}
          <Route path="/trade-tracker" element={<CandleImages />} />
          <Route path="/weekly-analysis" element={<TradeDetailsTable />} />
          <Route path="/candle-view/:id" element={<CandleImagesView />} />
          
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};


export default App;