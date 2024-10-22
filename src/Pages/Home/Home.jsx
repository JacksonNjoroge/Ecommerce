import { useState, useEffect } from 'react';
import './Home.css';
import '../../Components/Footer/Footer.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/born.png'


function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { img: './air.png', title: 'AIR FORCE', price: '$100' },
    { img: './jordan.png', title: 'AIR JORDAN', price: '$100' },
    { img: './blazer.png', title: 'BLAZER', price: '$100' },
    { img: './crater.png', title: 'CRATER', price: '$100' },
    { img: './hippie.png', title: 'HIPPIE', price: '$100' }
  ];

  // Automatically slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, [slides.length]);

  return (
  <>
      <div className="slider">
        <div
          className="sliderWrapper"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="sliderItem">
              <img src={slide.img} alt={slide.title} className="sliderImg" />
              <div
                  className={`sliderBg ${
                    index === 0
                      ? 'bg-color-1'
                      : index === 1
                      ? 'bg-color-2'
                      : index === 2
                      ? 'bg-color-3'
                      : index === 3
                      ? 'bg-color-4'
                      : 'bg-color-5'
                  }`}
              ></div>
              <h1 className="sliderTitle">
                {slide.title} <br /> NEW <br /> SEASON
              </h1>
              <h2 className="sliderPrice">{slide.price}</h2>
              <button className="buyButton">Buy Now</button>
            </div>
          ))}
        </div>
      </div>


      <div className="features">
        <div className="feature">
          <img src="./shipping.png" alt="" className="featureImg" />
          <span className="featureTitle">FREE SHIPPING</span>
          <span className="featureDesc">Free worldwide shipping on all orders.</span> 
        </div>
        <div className="feature">
          <img src="./return.png" alt="" className="featureImg" />
          <span className="featureTitle">30 DAYS RETURN</span>
          <span className="featureDesc">No question return and easy refund in 14 days.</span> 
        </div>
        <div className="feature">
          <img src="./gift.png" alt="" className="featureImg" />
          <span className="featureTitle">GIFT CARDS</span>
          <span className="featureDesc">Buy gift cards and use coupon codes easily.</span> 
        </div>
        <div className="feature">
          <img src="./contact.png" alt="" className="featureImg" />
          <span className="featureTitle">CONTACT US!</span>
          <span className="featureDesc">Keep in touch via email and support the system.</span> 
        </div>
      </div>


      <div className="collaboration">
          <div className="far-left">
              <div className="collabText">Adidas</div>
          </div>
          <div className="left">
              <div className="collabText">Jordan</div>
          </div>
          <div className="Center">
              <div className="explainer"><span>in Partner With...</span></div>
              <div className="collabText">Nike</div>
          </div>
          <div className="right">
              <div className="collabText">Lv</div>
          </div>
          <div className="far-right">
              <div className="collabText">Vans</div>
          </div>
      </div>



      <div className="gallery">
          <div className="galleryItem">
            <h1 className="galleryTitle">Be Yourself!</h1>
              <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="" className="galleryImg" />
          </div>
          <div className="galleryItem">
              <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="" className="galleryImg" />
            <h1 className="galleryTitle">This is the first day of your new life</h1>
          </div>
          <div className="galleryItem">
            <h1 className="galleryTitle">Just Do it!</h1>
              <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="" className="galleryImg"/>
          </div>
      </div>


      <div className='ns'>
        <h1 className="nsTitle head">COMING SOON...</h1>
        <div className="newSeason">
          <div className="nsItem">
              <img src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="" className="nsImg" />
          </div>
          <div className="nsItem">
              <h3 className="nsTitleSm">WINTER NEW ARRIVALS</h3>
              <h1 className="nsTitle">New Season</h1>
              <h1 className="nsTitle">New Collection</h1>
          </div>
          <div className="nsItem">
              <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="" className="nsImg" />
          </div>
      </div>
      </div>


    <footer className="footer">
    <div className="top-section">
      <div className="logo">
        <img src={logo} alt="Ecommerce Logo" className='logo' /> {/* Add logo src */}
      </div>
      <div className="social-box">
        <i className='bx bxl-facebook bx-flashing' ></i>
        <i className='bx bxl-twitter bx-tada' ></i>
        <i className='bx bxl-instagram bx-burst'></i>
        <i className='bx bxl-youtube bx-fade-up' ></i>
      </div>
    </div>
    
    <div className="mid-section">
      <div className="Quick-Links">
        <div className="pages">
          <h3>Pages</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>
    
        <div className="Products">
          <h3>Products</h3>
          <Link to="/category1" className='link'>Category 1</Link>
          <Link to="/category2" className='link'>Category 2</Link>
          <Link to="/category3" className='link'>Category 3</Link>
        </div>
    
        <div className="Resources">
          <h3>Resources</h3>
          <Link to="/faqs">FAQs</Link>
          <Link to="/quickstart">Quick Start</Link>
          <Link to="/documentation">Documentation</Link>
          <Link to="/userguide">User Guide</Link>
        </div>
      </div>
    
      <div className="newsLetter">
        <h3>NewsLetter</h3>
        <form action="" className='form'>
          <label htmlFor="newsletter-email">email</label>
          <input
            type="email"
            name="email"
            id="newsletter-email"
            placeholder="mail@ecommerce.com"
          />
          <div className="form-bottom">
            <div>
              <input type="checkbox" id="agree" /> 
              <label htmlFor="agree" className='checkbox-label'>
                I agree with the <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
                <Link to="/terms">Terms of Conditions</Link>
              </label>
            </div>
            <button type="submit" className="submit">
              Send
            </button>
          </div>
        </form>
      </div>
      
    </div>
    
    <div className="bottom-section">
      <p className="copyright">
        &copy; 2022 Ecommerce Commerce. All rights reserved.
      </p>
    </div>
    </footer>
  </>
  );
}

export default Home;
