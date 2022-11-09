import { Link } from 'react-router-dom';

function ProductRow(props) {  
  return (
    <tr>
      <td><Link to={`/product/${props.id}`}>{props.title}</Link></td>
      <td>${props.price.toLocaleString()}</td>
    </tr>
  );
}

export default ProductRow;