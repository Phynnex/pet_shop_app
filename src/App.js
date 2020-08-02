import React,  { Component } from 'react'
import './App.css';
import about from './Images/about.jpg'
import about_1 from './Images/about_1.jpg'
import about_2 from './Images/about_2.jpg'
import about_3 from './Images/about_3.jpg'



class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="contact">
          <a href="/" className="mr-2"><span className="fa fa-phone mr-1 contact"></span> +00 1234 567</a>
          <a href="/"><span className="fa fa-paper-plane mr-1 contact">email@example.com</span></a>
        </div>

        <div className="socialmedia">
          <i className="fa fa-facebook sm-icons" aria-hidden="true"></i>
          <i className="fa fa-twitter sm-icons" aria-hidden="true"></i>
          <i className="fa fa-instagram sm-icons" aria-hidden="true"></i>
          <i className="fa fa-dribbble sm-icons" aria-hidden="true" ></i>
        </div>

        <div className="navigation-bar clear" >
          <h2><i className="fa fa-paw icon" aria-hidden="true"></i>Pet Sitting</h2>
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
        </div>

        <div className="carousel">
          <h1>Highest Quality Care For Pets You'll Love</h1>
          <button className="button">LEARN MORE</button>
        </div>

        <section className="products">
          <div className="products container">
            <div className="media-body">
              <h3 className="heading">Dog Walking</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
              <a href="/" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right"></span><i className="sr-only">Read more</i></a>  
            </div>   

            <div className="media-body">
              <h3 className="heading">Pet Care</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
              <a href="/" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right"></span><i className="sr-only">Read more</i></a>
            </div>

            <div className="media-body">
              <h3 className="heading">Pet Grooming</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
              <a href="/" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right"></span><i className="sr-only">Read more</i></a>
            </div>
          </div>
        </section>

       <section className="our selling point">
          <div class="header">
            <h2 class="choice">Why Choose Us?</h2>
            <img src={about_1} alt='about_1' />
          </div>

          <div class="reason">
            <h4>Care Advices</h4>
            <p>Far far away, behind the word mountains, far from the countries.</p>
          </div>

          <div class="reason">
            <h4>Customer Support</h4>
            <p>Far far away, behind the word mountains, far from the countries.</p>
          </div>

          <div class="reason">
            <h4>Emergency Services</h4>
            <p>Far far away, behind the word mountains, far from the countries.</p>
          </div>

          <div class="reason">
            <h4>Vertinary Help</h4>
            <p>Far far away, behind the word mountains, far from the countries.</p>
          </div>
        </section>

        <section class="ftco-counter" id="section-counter">
          <div class="container"> 
            <div class="text">
              <strong class="number" data-number="50">0</strong>
            </div>
            <div class="text">
              <span>Customer</span>
            </div>

            <div class="text">
              <strong class="number" data-number="8500">0</strong>
            </div>
            <div class="text">
              <span>Professionals</span>
            </div>

            <div class="text">
              <strong class="number" data-number="20">0</strong>
            </div>
            <div class="text">
              <span>Products</span>
            </div>

            <div class="text">
              <strong class="number" data-number="50">0</strong>
            </div>
            <div class="text">
              <span>Pets Hosted</span>
            </div>
          </div>
        </section>

        <section class="ftco-section bg-light ftco-faqs">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 order-md-last">
                <img src={about} alt='about' />
                <a href="https://vimeo.com/45830194" class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                <span class="fa fa-play"></span>
                </a>
                <img src={about_2} alt='about_2' />
                <img src={about_3} alt='about_3' />
                <div class="col-lg-6">
                  <h2 class="mb-3">Frequently Asks Questions</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div class="card">    
                  <button >
                    <p class="mb-0">How to train your pet dog?</p>
                    <i class="fa" aria-hidden="true"></i>
                  </button>
                </div>
                  <div class="card-body py-3 px-0">
                    <ol>
                      <li>Far far away, behind the word mountains</li>
                      <li>Consonantia, there live the blind texts</li>
                      <li>When she reached the first hills of the Italic Mountains</li>
                      <li>Bookmarksgrove, the headline of Alphabet Village</li>
                      <li>Separated they live in Bookmarksgrove right</li>
                    </ol>
                  </div>
                </div>

                <div class="card">    
                  <button >
                    <p class="mb-0">How to train your pet dog?</p>
                    <i class="fa" aria-hidden="true"></i>
                  </button>
                </div>
                  <div class="card-body py-3 px-0">
                    <ol>
                      <li>Far far away, behind the word mountains</li>
                      <li>Consonantia, there live the blind texts</li>
                      <li>When she reached the first hills of the Italic Mountains</li>
                      <li>Bookmarksgrove, the headline of Alphabet Village</li>
                      <li>Separated they live in Bookmarksgrove right</li>
                    </ol>
                  </div>     
                </div>

                <div class="card">    
                    <button >
                      <p class="mb-0">How to train your pet dog?</p>
                      <i class="fa" aria-hidden="true"></i>
                    </button>
                  </div>
                    <div class="card-body py-3 px-0">
                      <ol>
                        <li>Far far away, behind the word mountains</li>
                        <li>Consonantia, there live the blind texts</li>
                        <li>When she reached the first hills of the Italic Mountains</li>
                        <li>Bookmarksgrove, the headline of Alphabet Village</li>
                        <li>Separated they live in Bookmarksgrove right</li>
                      </ol>
                    </div>     
                </div>

                <div class="card">    
                  <button >
                    <p class="mb-0">How to train your pet dog?</p>
                    <i class="fa" aria-hidden="true"></i>
                  </button>
                  </div>
                    <div class="card-body py-3 px-0">
                      <ol>
                        <li>Far far away, behind the word mountains</li>
                        <li>Consonantia, there live the blind texts</li>
                        <li>When she reached the first hills of the Italic Mountains</li>
                        <li>Bookmarksgrove, the headline of Alphabet Village</li>
                        <li>Separated they live in Bookmarksgrove right</li>
                      </ol>
                    </div>      

                  <div class="card">    
                    <button >
                      <p class="mb-0">How to train your pet dog?</p>
                      <i class="fa" aria-hidden="true"></i>
                    </button>
                  </div>
                    <div class="card-body py-3 px-0">
                      <ol>
                        <li>Far far away, behind the word mountains</li>
                        <li>Consonantia, there live the blind texts</li>
                        <li>When she reached the first hills of the Italic Mountains</li>
                        <li>Bookmarksgrove, the headline of Alphabet Village</li>
                        <li>Separated they live in Bookmarksgrove right</li>
                      </ol>
                    </div>   
              </div>
            </div>     
          </div>
        </section>
      </div>
    );
  }
 
}

export default App;
