import React from 'react';
import Footer from "../components/Footer";
import Header from '../components/Header';
import Consult from '../components/Consult';
import Faqs from '../components/Faqs';

const Vetenarian = () => {
  return(
    <div>
      <Header/>
      <Faqs/>
      <Consult/>
      <Footer/>
    </div>
  );
}

export default Vetenarian;