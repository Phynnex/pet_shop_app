import React from "react";
import { Route } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Vetenarian from "../Pages/Vetenarian.jsx";
import Services from "../Pages/Services.jsx";
import Gallery from "../Pages/Gallery.jsx";
import Pricing from "../Pages/Pricing.jsx";
import Blog from "../Pages/Blog.jsx";
import Contact from "../Pages/Contact.jsx";
// import NotFoundPage from "../Pages/404";
import Navbar from "./Navbar";

const App = () => {
  return (
    <section className="container-all">
      <switch>
        <Navbar />
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} />
        <Route path="/vetenarian" component={Vetenarian}/>
        <Route path="/services" component={Services}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/contact" component={Contact}/>
        {/* <Route component={NotFoundPage} /> */}
      </switch>
  </section>
  );
};






export default App;
