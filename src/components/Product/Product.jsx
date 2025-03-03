import "./Product.css";

const Product = (props) => {
  return (
    <>
      <h1 style={{ backgroundColor: "red", color: "white" }}>
        product- {props.name}
      </h1>
      <h1 className="price">price- {props.price}</h1>
    </>
  );
};

export default Product;
