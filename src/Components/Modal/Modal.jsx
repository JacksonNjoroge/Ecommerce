import PropTypes from 'prop-types';
import './Modal.css'

function Modal({ product, onClose }) {
    if (!product) return null; // Return null if no product is selected (modal hidden)

    return (
        <div style={{
            position: "fixed", 
            top: "0", 
            left: "0", 
            width: "100%", 
            height: "100%", 
            backgroundColor: "rgba(0,0,0,0.7)", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center"
        }}>
            <div className='modal-container' style={{
                backgroundColor: "white", 
                padding: "20px", 
                borderRadius: "10px", 
                maxWidth: "800px", 
                width: "100%"
            }}>
                <h2 className='product-title'>{product.title}</h2>
                <img className='product-image' src={product.image} alt={product.title}/>
                <p className='product-desc'>{product.description}</p>
                <p className='product-price'>Price: ${product.price}</p>
                <p className='product-category'>Category: {product.category}</p>
                <button className='close-BTN' onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

// Define prop types for Modal component
Modal.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal;
