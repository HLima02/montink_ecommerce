import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaYoutube  } from "react-icons/fa";
import logo from '@/assets/logo.png'

export default function Footer() {
  return (
    <header className='py-2 flex flex-col justify-center items-center w-full bg-black text-white px-10'>
      <div>
        <p className='text-lg mb-2'>Desenvolvido por Hiago Lima &copy;2025</p>
      </div>
      <div className='w-full flex justify-between border-t-1 border-white border-solid py-2'>
        <h2 className=' text-2xl font-bold'>MontinkCommerce</h2>
        <div className='flex gap-2'>
          <Link href='https://montink.com/' className='bg-white flex w-7 h-7 rounded-full justify-center'><Image src={logo} alt='Logo Montink' width={50} height={50} /></Link>
          <Link href="https://www.youtube.com/@montinkoficial"><FaYoutube size={30}/></Link>
          <Link href="https://www.instagram.com/soumontink/"><FaInstagram size={30}/></Link>
        </div>
      </div>
    </header>
  )
}
