import { DetailWrapper,ThemeButton } from "../styles";

const ProductDetail = (props) => {
  const cookie = props.cookie;
  return (
    <DetailWrapper>
      <h1>{cookie.name}</h1>
      <img src={cookie.image} alt={cookie.name} />
      <p>{cookie.description}</p>
      <p>{cookie.price}</p>
      <ThemeButton onClick={() => props.setProduct("")}>Go Back Home</ThemeButton>
    </DetailWrapper>
  );
};

export default ProductDetail;
