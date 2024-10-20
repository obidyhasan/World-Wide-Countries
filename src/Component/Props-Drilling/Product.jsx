function Product(props) {
  const { name, age, isStudent } = props;
  return (
    <>
      <h3>Product</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "YES" : "NO"}</p>
    </>
  );
}

export default Product;
