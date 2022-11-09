import { useState, useRef } from 'react';
import './AddToCartForm.css';

function AddToCartForm(props) {
  const [amount, setAmount] = useState('');
  const amountInput = useRef(null);

  function handleChange(e) {
    setAmount(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addToCart(props.id, Number(amount));
    setAmount('');
    amountInput.current.focus();
  }

  return (
    <form className="AddToCartForm" onSubmit={handleSubmit}>      
      <label htmlFor="amount">Amount:</label>
      <input 
        type="number" 
        id="amount" 
        min="1" 
        value={amount}
        onChange={handleChange}
        ref={amountInput}
      />      
      <button>Add To Cart</button>
    </form>
  );
}

export default AddToCartForm;