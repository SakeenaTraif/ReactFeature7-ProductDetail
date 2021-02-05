// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// react
import { useState } from "react";

const ProductList = (props) => {
  const [query, setQuery] = useState("");
  // const [_products,setProducts] =useState(products);

  // const deleteProduct = (productId) =>{
  // const keptProducts = _products.filter((product) => product.id !== productId);
  //   setProducts(keptProducts);
  //   // console.log(`Deleting product with ID: ${productId}`);
  // };

  const productList = props.products
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => 
    <ProductItem 
    product={product} 
    key={product.id} 
    setProduct={props.setProduct}
    deleteProduct={props.deleteProduct}/>);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
