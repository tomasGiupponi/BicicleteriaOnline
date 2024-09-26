"use client"

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { deleteProduct } from '@/app/products/products.api'
import { useRouter } from "next/navigation"

export function ProductCard({product}: any) {
  const router = useRouter()

  async function removeProduct(id:string){
    await deleteProduct(id);
    router.refresh()
  }

  return (
    <Card onClick={()=>{
      router.push(`/products/${product.id}`)
    }}>
          <CardHeader>
          <CardTitle className="flex justify-between">
            {product.name}
            <span className="text-sm">${product.price}</span>
          </CardTitle>
          </CardHeader>
          <img src={product.image} alt=""></img>
          <CardContent>
            <p>
              {product.description}
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
              <Button className="mt-4" onClick={(e)=>{
                e.stopPropagation();
                router.push(`/products/${product.id}/edit`);
              }}>
                Editar</Button>
              <Button className="mt-4" variant="destructive" onClick={(e)=>{
                e.stopPropagation();
                removeProduct(product.id);
              }}>Eliminar</Button>
            </CardFooter>
        </Card>
  )
}

export default ProductCard