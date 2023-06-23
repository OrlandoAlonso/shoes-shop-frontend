import React from 'react';
import Link from 'next/link';

const ProductCard = ({ id, src, nombre, price, original_price }) => {
  return (
    <Link href={`/product/${id}`} className="transform overflow-hidden bg-bgbody duration-200 hover:scale-105 hover:shadow-md cursor-pointer">
        <img className='w-full' src={src} alt={nombre} />
        <div className="p-4 text-primary/[0.9]">
            <h2 className="text-lg font-medium">{nombre}</h2>
            <div className="flex items-center text-primary/[0.5]">
                <p className="mr-2 text-lg font-semibold">&#36;{price}</p>
                <p className="text-base font-medium line-through">&#36;{original_price}</p>
                <p className="ml-auto text-[10px] font-medium text-success">12.50% de descuento</p>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard