'use client'
import { useState } from 'react'

import { AddressType } from '@/types/types'
import { insertMaskInCEP } from '@/functions/address'

export default function Address() {
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState<AddressType | null>(null)
  const [error, setError] = useState(false)

  return (
    <div className='mt-10 w-full max-w-5xl m-auto py-10 px-10 '>
      <h3 className='text-2xl font-bold'>Verificar endereço</h3>

      <div className='flex gap-2'>
        <input value={insertMaskInCEP(cep)} onChange={(e) => setCep(e.target.value)} type='text' placeholder='Digite o CEP' className="border border-gray-300 p-2 rounded-lg w-full" />
        <button className='bg-black text-white border-1 border-white border-solid px-4 py-2 text-lg rounded-xl'>Verificar</button>
      </div>
    </div>
  )
}
