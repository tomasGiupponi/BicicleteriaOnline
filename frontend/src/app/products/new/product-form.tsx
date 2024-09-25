"use client"

import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { createProduct } from "../products.api"

export function ProductForm() {

    const{ register,handleSubmit } = useForm();
    const onSubmit = handleSubmit(async data=>{
        console.log(data)
        await createProduct(data)
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

            <Button>Confirmar</Button>

          </form>
  )
}