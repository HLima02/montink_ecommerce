import type { StaticImageData } from 'next/image'

type ProductImageData = {
  id: number
  url: string | StaticImageData
}

type ProductImages = {
  id: number,
  data: ProductImageData[]
}

export type ProductType = {
  id: number;
  name: string;
  price: number;
  images: ProductImages[]
}