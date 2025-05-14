import image01 from '../assets/product_01/img_01.webp'
import image02 from '../assets/product_01/img_02.webp'
import image03 from '../assets/product_01/img_03.webp'
import image04 from '../assets/product_01/img_04.webp'

import { ProductType } from '../types/types'

export const Product: ProductType = {
  id: 1,
  name: 'Camisa Básica Masculina',
  price: 24.99,
  images: [
    {
      id: 0,
      data: [
        { id: 1, url: image01 },
        { id: 2, url: image02 },
        { id: 3, url: image03 },
        { id: 4, url: image04 },
      ],
    },
  ],
};
