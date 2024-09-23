import { CreateProductDto } from './create-product.dto';

export type UpdateProductDto = Partial<CreateProductDto> //espera los mismos campos pero todos de manera opcional