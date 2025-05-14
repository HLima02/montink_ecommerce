'use client'
import { useState, useEffect } from 'react'

import { AddressType } from '@/types/types'
import { insertMaskInCEP } from '@/functions/address'
import { timeStamp } from 'console'

export default function Address() {
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState<AddressType | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const save = localStorage.getItem('@storage_address')
    if(save){
      const { data, timestamp  } = JSON.parse(save)
      if(Date.now() - timestamp < 15 * 60 * 1000){
        setAddress(data)
      } else {
        localStorage.removeItem('@storage_address')
      }
    }
  }, [])

  const handleAddress = async () => {
    const cleanCEP = cep.replace(/\D/g, '')

    if(cleanCEP.length !== 8){
      setError('CEP inválido. Deve conter 8 dígitos')
      setAddress(null)
      return
    }

    try {
      const req = await fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`)
      const data:AddressType = await req.json()
      
      if(data.erro){
        setError('CEP não encontrado.');
        setAddress(null);
        setCep('')
      } else {
        setError('');
        setAddress(data);
        localStorage.setItem('@storage_address', JSON.stringify({data, timestamp: Date.now()}))
      }
    } 

    catch {
      setError('Erro ao consultar o CEP.');
      setAddress(null);
    }
  }

  return (
    <div className='mb-10 w-full max-w-5xl m-auto py-10 px-10 '>
      <h3 className='text-2xl font-bold mb-5'>Verificar endereço</h3>

      <div className='flex gap-2'>
        <input value={insertMaskInCEP(cep)} onChange={(e) => setCep(e.target.value)} type='text' placeholder='Digite o CEP' className="border border-gray-300 p-2 rounded-lg w-full" />
        <button onClick={handleAddress} className='bg-black text-white border-1 border-white border-solid px-4 py-2 text-lg rounded-xl cursor-pointer'>Verificar</button>
      </div>
      {error && <p className='text-red-600'>{error}</p>}
      {address && (
        <div className='my-5'>
          <p className='text-lg sm:text-xl'><strong>Endereço: </strong> {address.logradouro}</p>
          <p className='text-lg sm:text-xl'><strong>Bairro: </strong> {address.bairro}</p>
          <p className='text-lg sm:text-xl'><strong>Cidade: </strong> {address.localidade} - {address.uf}</p>
          <p className='text-lg sm:text-xl'><strong>CEP: </strong> {address.cep}</p>
        </div>
      )}
    </div>
  )
}
