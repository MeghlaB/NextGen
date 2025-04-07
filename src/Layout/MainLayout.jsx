import React from "react";
import Nabar from "../Components/Navbar/Nabar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
function MainLayout() {
  return (
    <div>
      <header>
        <Nabar></Nabar>
      </header>
      <div className="min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
