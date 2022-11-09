import './ProductInfo.css';

function ProductInfo(props) {
  const product = props.product;

  return (    
    <figure className="ProductInfo">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title}/>
      <p>{product.description}</p>
      <figcaption>        
        Price: ${product.price.toLocaleString()}
      </figcaption>
    </figure>
  );
}

export default ProductInfo;