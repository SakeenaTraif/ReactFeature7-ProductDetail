import { DetailWrapper,ThemeButton } from "../styles";
//components
import DeleteButton from "./DeleteButton";

const ProductDetail = (props) => {
  const product = props.product;
  const setProduct = props.setProduct;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <ThemeButton onClick={() => props.setProduct("")}>Go Back Home</ThemeButton>
      <DeleteButton deleteProduct={props.deleteProduct} product={product} setProduct={setProduct}/>
    </DetailWrapper>
  );
};

export default ProductDetail;
