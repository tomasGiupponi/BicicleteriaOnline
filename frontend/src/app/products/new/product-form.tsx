"use client"

import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { createProduct, updateProduct } from "../products.api"
import { useParams, useRouter } from "next/navigation"


export function ProductForm({product}:any) {
    const{ register,handleSubmit } = useForm({
      defaultValues:{
        name: product?.name,
        description: product?.description,
        price: product?.price,
        image: product?.image,
      }
    });

    const router= useRouter();
    const params = useParams<{id: string}>();

    const onSubmit = handleSubmit(async data=>{
        if(params?.id){
           await updateProduct(params.id,{
            ...data,
            price: parseFloat(data.price)})
        }else{
          await createProduct({
            ...data,
            price: parseFloat(data.price),
          })
        }
        
        router.push("/");
        router.refresh()
    })

  return (
    <form onSubmit={onSubmit}>

            <Label>
              Nombre del producto
            </Label>
            <Input {...register('name')}/>

            <Label>
              Descripcion del producto
            </Label>
            <Input {...register('description')}/>

            <Label>
              Precio del producto
            </Label>
            <Input {...register('price')}/>

            <Label>
              Imagen del producto
            </Label>
            <Input {...register('image')}/>

            <Button>
              {
                params.id ? 'Actualizar' : 'Añadir'
              }
              </Button>

          </form>
  )
}