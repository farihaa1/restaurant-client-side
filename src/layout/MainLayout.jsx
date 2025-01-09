import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
