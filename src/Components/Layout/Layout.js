import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div className="bg-gradient overflow-hidden">
      <Navbar />
      <div className="font-monts">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};
export default Layout;