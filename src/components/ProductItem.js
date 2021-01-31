// Styling
import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <img alt={product.name} src={product.image} onClick={() => props.setProduct(product)}/>
      <p>{product.name}</p>
      <p className="product-price">{product.price} BHD</p>
    </ProductWrapper>
  );
};

export default ProductItem;
