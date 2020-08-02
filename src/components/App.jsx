import React from "react";
// import css from "./styles/styles.css";
import ChooseUs from "./ChooseUs";
import Consult from "./Consult";
import Faqs from "./Faqs";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Nav from "./Nav";
import News from "./News";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import Header from "./Header";

const App = () => {
  return (
    <div className="container-all">
      <Nav />
      <Header />
      <ChooseUs />
      <Faqs />
      <Testimonial />
      <Pricing />
      <Gallery />
      <News />
      <Consult />
      <Footer />
    </div>
  );
};

export default App;
