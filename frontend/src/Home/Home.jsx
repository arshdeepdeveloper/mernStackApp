import React from "react";
import Navbar from "../Component/Navbar";
import Banner from "../Component/Banner";
import Freebook from "../Component/Freebook";
import Footer from "../Component/Footer";
import Login from "../Component/Login";

function Home() {
  return (
    <> 
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
