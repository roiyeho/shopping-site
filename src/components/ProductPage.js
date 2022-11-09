import AddToCartForm from "./AddToCartForm";
import ProductInfo from "./ProductInfo";
import { useParams } from 'react-router-dom';

function ProductPage(props) {
  const products = props.products;
  let { id } = useParams();
  id = Number(id);
  const product = products.get(id);
  
  return (
    <div>      
      <ProductInfo product={product} />
      <AddToCartForm 
        id={id} 
        addToCart={props.addToCart}        
      />
    </div>
  );
}

export default ProductPage;