import React from "react";
// import css from "../styles/styles..css";
import ChooseUs from "../components/ChooseUs";
import Consult from "../components/Consult";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import GalleryComp from "../components/GalleryComp";
//import Nav from "../Nav";
import News from "../components/News";
import Price from "../components/Price";
import Testimonial from "../components/Testimonial";
import Header from "../components/Header";
// import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Header />
      <ChooseUs />
      <Faqs />
      <Testimonial />
      <Price />
      <GalleryComp />
      <News />
      <Consult />
      <Footer />
    </>
  );
};

export default Home;
