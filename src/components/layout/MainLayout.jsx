import React from "react";
import Navbar from "../Navbar";
import Home from "../Home";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div className="space-y-10">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto" >
        <Home />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
