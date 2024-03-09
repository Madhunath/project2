import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../action/cartAction'; 
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [successMessage, setSuccessMessage] = useState('');
  const [isCheckout, setIsCheckout] = useState(false);

  const calculateProductTotal = (item) => {
    return item.price * item.quantity;
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  const handleRemoveFromCart = (productId, productName) => {
    if (window.confirm(`Are you sure you want to remove ${productName} from your cart?`)) {
      dispatch(removeFromCart(productId));
      const message = `${productName} has been removed from your cart.`;
      setSuccessMessage(message);
      setTimeout(() => {
        setSuccessMessage('');
      }, 10);
    }
  }

  return (
    <div className='container text-center align-items-center'>
      <div className='cart mt-5 pt-5 ps-5 mb-5 text-center'>
        <h1>Cart</h1>
        {successMessage && (
          <div className="alert alert-success mt-2">{successMessage}</div>
        )}
        <ul className="cart-list mb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {cart.map(item => (
            <li key={item.id} className="card cart-item ms-5 mb-5" style={{ width: '40rem' }}>
              <div className='row d-flex'>
                <div className="col cart-item-content">
                  <img src={item.image} alt={item.name} className="cart-image mt-3 mb-3" />
                </div>  
                <div className="col cart-details mt-2">
                  <span className="cart-name">{item.name}</span><br/>
                  <div className="cart-total">₹{calculateProductTotal(item)}</div>
                  <button className='remove-btn mt-4 mb-4' onClick={() => handleRemoveFromCart(item.id, item.name)}>Remove from Cart</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <h2 style={{ textAlign: 'center' }}>Total Fees: ₹{calculateTotal()}</h2>
        
        {/* Conditionally render Pay Now and Go Back buttons */}
        {cart.length > 0 && !isCheckout ? (
          <>
            <button onClick={() => setIsCheckout(true)} className='ps-4 pt-2 pb-2 pe-4 mb-2'>Pay Now</button> <br />
            <button>  
              <Link to='/' className='goback-btn link btn '>
                Go Back
              </Link>
            </button>
          </>
        ) : (
          <button>
            <Link to='/' className='goback-btn link btn'>
              Go Back
            </Link>
          </button>
        )}

        {isCheckout && (
          <div className="alert alert-success mt-2">Your fees have been successfully paid!</div>
        )}
      </div>
    </div>  
  );
}

export default Cart;
