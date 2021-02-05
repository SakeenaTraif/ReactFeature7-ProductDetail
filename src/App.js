// Styling
import { GlobalStyle, ThemeButton } from "./styles";

import Home from "./components/Home";
// Components
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
//Data
import products from "./products";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_products, setProducts] = useState(products);
  const [product,setProduct] =useState("");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  const deleteProduct = (productId) =>{
    const keptProducts = _products.filter((product) => product.id !== productId);
      setProducts(keptProducts);
    };

    const display =() => product ? (
    <ProductDetail 
    product={product} 
    setProduct={setProduct}
    deleteProduct={deleteProduct}/>):(
      <ProductList 
      products={_products} 
      setProduct={setProduct} 
      deleteProduct={deleteProduct}/>
    );

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <Home />
      {display()}
    </ThemeProvider>
  );
}

export default App;
