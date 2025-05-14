import type { StaticImageData } from 'next/image'

type ProductImageData = {
  id: number
  url: string | StaticImageData
}

type ProductImages = {
  data: ProductImageData[]
}

export type ProductType = {
  id: number
  name: string
  price: number
  images: ProductImages[]
}

export type AddressType = {
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
  erro?: boolean
}