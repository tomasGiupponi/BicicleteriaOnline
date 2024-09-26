import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProductForm } from "./product-form"
import { getProduct } from "../products.api";

interface ScriptProps{
  params : {
    id:string;
  };
} 

async function ProductsNewPage({params}: ScriptProps) {
  const product = await getProduct(params.id);
  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-center">
            {
              params.id ? 'Actualizar producto' : 'Añadir producto'
            }
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm product={product}/>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductsNewPage