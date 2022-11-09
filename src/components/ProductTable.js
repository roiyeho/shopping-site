import ProductRow from "./ProductRow";
import { useState } from 'react';
import Pagination from "./Pagination";

function ProductTable(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  
  const numOfPages = Math.ceil(props.products.size / rowsPerPage);
  const firstRowIndex = (currentPage - 1) * rowsPerPage;
  const lastRowIndex = currentPage * rowsPerPage;

  const products = [...props.products.values()].slice(firstRowIndex, lastRowIndex);
  const rows = products.map(product => (   
    <ProductRow
      id={product.id}
      title={product.title}
      price={product.price}      
      key={product.id}
    />
  ));

  return (
    <div>
      <h2>Our Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>          
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <Pagination className="Pagination"
        numOfPages={numOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default ProductTable;