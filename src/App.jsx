import Product from "./components/Product/Product";
const App = () => {
  return (
    <div>
      <Product name={"Samsung"} price={200000} />
      <Product name={"Oppo"} price={90000} />
      <Product name={"OnePlus"} price={60000} />
      <Product />
      <Product name="vivo">hello how are you</Product>
    </div>
  );
};

export default App;
