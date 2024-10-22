import { useEffect, useState } from 'react';
import useFetch from "../../Hooks/useFetch";
import './Products.css';
import Modal from '../../Components/Modal/Modal';
import Loader from '../../Components/Loader/Loader';
import PropTypes from 'prop-types';
import Payment from '../../Components/Payment/Payment'
import '../../Components/Footer/Footer.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/born.png'


function Products() {
  const { data: products = [], loading, error } = useFetch("https://fakestoreapi.com/products");
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [productWidthClass, setProductWidthClass] = useState("full-width");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("All");
  const [isPaymentVisible, setIsPaymentVisible] = useState(false); // Control payment visibility

  // Filtering Products
  const filteredProducts = products ? products.filter((product) => {
    if (filter === "All") return true;
    return product.category.toLowerCase() === filter.toLowerCase();
  }) : [];

  // Function to add product to cart
  const addToCart = (event, product) => {
    event.stopPropagation();
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...exists, quantity: exists.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setIsCartVisible(true);
    setProductWidthClass("reduced-width");
  };


  // Function to remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update product quantity in cart
  const updateQuantity = (productId, amount) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + amount } : item
    ));
  };

  // Calculate total price of cart items
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Toggle cart visibility and adjust product width
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
    setProductWidthClass(isCartVisible ? "full-width" : "reduced-width");
  };

  // Handle page scroll to hide the cart
  useEffect(() => {
    const handleScroll = () => {
      if (isCartVisible) {
        setIsCartVisible(false);
        setProductWidthClass("full-width");
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCartVisible]);

  // Function to open the modal
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Function to open payment modal
  const showPayment = () => {
    setIsPaymentVisible(true);
  };

  // Function to close payment modal
  const hidePayment = () => {
    setIsPaymentVisible(false);
  };

  if (loading) return <Loader />;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div className="Container">
      <h1 className="heading">Products</h1>

      <ProductsFilter setFilter={setFilter} />

      <div className="Contents">
        <div className={`product ${productWidthClass}`}>
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="productcard" onClick={() => openModal(product)}>
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-details">
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">$ {product.price}</p>
                </div>
                <button className="addToCart" onClick={(event) => addToCart(event, product)} title="Add To Cart">
                  <i className='bx bx-cart-add'></i>
                </button>
              </div>
            ))
          ) : (
            <p>No products available for this category</p>
          )}
        </div>
      </div>

      <button onClick={toggleCart} className="cart-btn">
        {isCartVisible ? (
          <lord-icon
          src="https://cdn.lordicon.com/mfmkufkr.json"
          colors="primary:#fff"
          trigger="hover">
      </lord-icon>
        ) : (
            <lord-icon
            src="https://cdn.lordicon.com/pbrgppbb.json"
            colors="primary:#fff"
            trigger="hover">
            </lord-icon>
        )}
        {cart.length > 0 && <span className="cart-counter">{cart.length}</span>}
      </button>

      {isCartVisible && (
        <div className="cart">
          <button className="close-btn" onClick={toggleCart}>X</button>
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="item">
                  <img src={item.image} alt={item.title} className="item-image" />
                  <div className="item-details">
                    <p className="item-title">{item.title}</p>
                    <p className="item-price">$ {item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
                    <div className="item-btns">
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity === 1}>-</button>
                      <button onClick={() => removeFromCart(item.id)}><i className="bx bxs-trash"></i></button>
                    </div>
                  </div>
                </div>
              ))}
              <hr />
              <h3>Total Price: $ {calculateTotal()}</h3>
              <button className="checkout" onClick={showPayment}>CHECKOUT</button>
            </>
          )}
        </div>
      )}

      {isPaymentVisible && <Payment onClose={hidePayment} />} {/* Conditionally render Payment */}

      <Modal product={selectedProduct} onClose={closeModal} />


    <footer className="productFooter">
    <div className="top-section">
      <div className="logo">
        <img src={Logo} alt="Ecommerce Logo" className='logo' /> 
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

    </div>
  );
}

export const ProductsFilter = ({ setFilter }) => {
  return (
    <div className="categories">
      <button className="category All" type="button" onClick={() => setFilter("All")}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        All
      </button>
      <button className="category men" type="button" onClick={() => setFilter("men's clothing")}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
        Men&apos;s Clothing
      </button>
      <button className="category women" type="button" onClick={() => setFilter("women's clothing")}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
        Women&apos;s Clothing
      </button>
      <button className="category jewelry" type="button" onClick={() => setFilter("jewelery")}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
        Jewelry
      </button>
      <button className="category electronics" type="button" onClick={() => setFilter("electronics")}>
      <span></span><span></span><span></span><span></span>
        Electronics
      </button>
    </div>
  );
};

// PropTypes validation
ProductsFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Products;
