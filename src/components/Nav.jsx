import React from "react";

const Nav = () => {
  return (
    <nav>
        <section className="container">
            <section className="contact left up-nav">
                <a href="/" className="phone-email"><span className="fa fa-phone"></span>   +00 123 456 78</a>
                <a href="/" className="phone-email"><span className="fa fa-paper-plane"></span>  email@example.com</a>
            </section>
            <section className="social-icons right up-nav">
                <i className="fa fa-facebook sm-icons"></i>
                <i className="fa fa-twitter sm-icons"></i>
                <i className="fa fa-instagram sm-icons"></i>
                <i className="fa fa-dribbble sm-icons" ></i>
            </section>
            <section className="clear"></section>
        </section>

        <section className="navigation-bar">
            <h2 className="nav-brand"><i className="fa fa-paw"></i>  Pet Sitting</h2>
            <nav className="navbar">
                <ul className="navbar-items">
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">VENTERINARIAN</a></li>
                <li><a href="/">SERVICES</a></li>
                <li><a href="/">GALLERY</a></li>
                <li><a href="/">PRICING</a></li>
                <li><a href="/">BLOG</a></li>
                <li><a href="/">CONTACT</a></li>
                </ul>
            </nav>
        </section>

    </nav>
  );
};

export default Nav;
