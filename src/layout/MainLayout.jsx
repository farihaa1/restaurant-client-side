import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || (
        <nav className="w-full ">
          <Navbar></Navbar>
        </nav>
      )}
      <div>
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || (
        <footer>
          <Footer></Footer>
        </footer>
      )}
    </div>
  );
};

export default MainLayout;
