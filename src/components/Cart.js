import { Link } from 'react-router-dom';

function Cart(props) {
  const cart = props.cart;
  const products = props.products;

  function deleteFromCart(id) {
    if (window.confirm('Are you sure you want to remove this product?')) {
      props.deleteFromCart(id);
    }
  }

  let totalPrice = 0;
  const rows = [...cart.entries()].map(([id, amount]) => {    
    const product = products.get(id);
    totalPrice += amount * product.price;

    return (
      <tr key={product.id}>
        <td><Link to={`/product/${product.id}`}>{product.title}</Link></td>             
        <td>${product.price.toLocaleString()}</td>
        <td>{amount}</td>
        <td>${(amount * product.price).toLocaleString()}</td>
        <td>
          <button 
            className="btn btn-danger" 
            onClick={() => deleteFromCart(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Your shopping cart</h2>
      {
        rows.length === 0 ? <span>No products in the cart</span> :
        <>
          <table class="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table><br />
          <div><strong>Total price: </strong>${totalPrice.toLocaleString()}</div>
        </>
      } 
    </div>    
  );
}

export default Cart;