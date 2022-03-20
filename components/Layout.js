import React from "react";
import Navbar from "./navBar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
