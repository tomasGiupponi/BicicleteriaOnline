import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { getProducts } from "./products/products.api";
import { ProductCard } from "@/components/product-card";

async function HomePage() {
  const products = await getProducts();
  console.log(products);

  return (
    <>
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold">
        Bicicleteria Online
      </h1>

      <Link href="/products/new"
        className={buttonVariants()}
      >
        Añadir un producto
      </Link>
    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
    </>
  )
}

export default HomePage
