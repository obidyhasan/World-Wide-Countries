import Product from "./Product";

function Products(props) {
  const { name, age, isStudent } = props;
  return (
    <>
      <h2>Products</h2>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Student : {isStudent ? "Yes" : "No"}</p>
      <Product {...props}></Product>
    </>
  );
}

export default Products;
