import React from 'react'

import BannerProduto from './componentes/BannerProduto'
import Address from './componentes/Address'

export default function Home() {
  return (
    <div className='w-full min-h-full'>
      <BannerProduto />
      <Address />
    </div>
  )
}
