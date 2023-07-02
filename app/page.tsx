import Product from "@/components/Product";
//"use client";

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();

  console.log(products);

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center">DEAL OF THE DAY</h1>

        {products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </section>
    </main>
  );
}
