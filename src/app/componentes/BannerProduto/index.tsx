'use client'
import React from 'react'
import Slider from "react-slick";
import { Product } from '@/data/product'
import Image from 'next/image'

import './style.css'

export default function BannerProduto() {
  const image = Product[0].images[0].data
  console.log(image)

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <div className="relative flex gap-4 w-12 sm:w-16 h-12 sm:h-16 overflow-hidden rounded">
            <Image
              src={image[i].url}
              alt={`Thumb ${i + 1}`}
              layout="fill"
              objectFit="object-cover"
            />
          </div>
        </a>
      );
    },
     dots: true,
    dotsClass: 'slick-dots slick-thumb mt-4',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }
  return (
    <div className=' w-full max-w-5xl m-auto py-10 px-10 sm:px-20'>
      <h2 className='text-3xl mb-5 font-bold'>{Product[0].name}</h2>
      <Slider {...settings} className='max-w-full xl:max-w-1/2 flex flex-col'>
        {image.map((item) => (
          <div key={item.id} className="relative w-full h-96">
            <Image
              src={item.url}
              alt={Product[0].name}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
