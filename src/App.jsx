import { Product } from "./Product.jsx";
import HomePage from "./Product.jsx";

const App = () => {
  const a = 20;

  return (
    <>
      <h1
        className=""
        onClick={() => {
          console.log("Hello");
        }}
      >
        {"hello world"}
      </h1>
      <p>byeeee</p>
      <Product />
      <HomePage />
      <Product></Product>
      <Product></Product>
    </>
  );
};

export default App;
