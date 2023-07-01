type Props = {
  product: Product;
};

function Product({ product }: Props) {
  return (
    <div>Product</div>
    //key={product.id}>
    // <h1>{product.title}</h1>
  );
}

export default Product;
