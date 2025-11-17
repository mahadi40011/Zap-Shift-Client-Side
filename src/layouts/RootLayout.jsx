import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <header></header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default RootLayout;
