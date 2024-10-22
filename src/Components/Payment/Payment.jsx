import './Payment.css'
import PropTypes from 'prop-types';

function Payment({onClose}) {
return (
    <>
        <div className="payment">
            <h1 className="payTitle">Personal Information</h1>
            <label htmlFor="">Name and Surname</label>
            <input type="text" name="" id="" className="payInput" placeholder="John Doe" />
            <label htmlFor="">Phone Number</label>
            <input type="number" name="" id="" className="payInput" placeholder="+254 234 5678"/>
            <label htmlFor="">Address</label>
            <input type="text" name="" id="" className="payInput"  placeholder="Rockport St 21 22-145"/>

            <h1 className="payTitle">Card Information</h1>
            <div className="cardIcons">
                <img src="./visa.png" alt="" className="cardIcon" />
                <img src="./master.png" alt="" className="cardIcon" />
            </div>
            <input type="password" name="" id="" className="payInput" placeholder="Card Number" />
            <div className="cardInfo">
                <input type="text" className="payInput sm" placeholder="mm" />
                <input type="text" className="payInput sm" placeholder="yyyy" />
                <input type="text" className="payInput sm" placeholder="CVV" />
            </div>
            <button className="payButton">Checkout!</button>
            <span className="close"  onClick={onClose}>X</span>
        </div>
    </>
)
}
Payment.propTypes = {
    onClose: PropTypes.func.isRequired,
  };
export default Payment