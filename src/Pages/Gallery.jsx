import React from 'react';
import Footer from "../components/Footer";
import GalleryComp from "../components/GalleryComp"
import Header from '../components/Header';

const Gallery = () => {
  return(
    <div>
      <Header/>
      <GalleryComp/>
      <Footer/>
    </div>
  );
}

export default Gallery;