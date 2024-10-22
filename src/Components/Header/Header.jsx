import { Link } from "react-router-dom"
import './Header.css'
import Logo from '../../assets/born.png'

function Header() {
  return (
    <>
    <div className="navContainer">
      <div className="logo">
        <Link><img src={Logo} alt=""  className="logo"/></Link>
      </div>
  
      <nav>
        <ul className="navList">
  
          <li>
            <Link to="/">Home</Link>
          </li>
  
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/registration'>Registration</Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Header