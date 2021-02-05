// Styling
import { ProductWrapper } from "../styles";
//components
import DeleteButton from "./DeleteButton";

const ProductItem = (props) => {
  const product = props.product;
  const setProduct = props.setProduct;
  

  return (
    <ProductWrapper>
      <img alt={product.name} src={product.image} onClick={() => props.setProduct(product)}/>
      <p>{product.name}</p>
      <p className="product-price">{product.price} BHD</p>
      <DeleteButton deleteProduct={props.deleteProduct} product={product} setProduct={setProduct}/>
    </ProductWrapper>
  );
};

export default ProductItem;
