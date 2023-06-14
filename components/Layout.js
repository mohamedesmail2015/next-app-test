import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
