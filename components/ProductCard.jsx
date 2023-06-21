import React from 'react';
import Link from 'next/link';

const ProductCard = () => {
  return (
    <Link href={"/product/1"} className="transform overflow-hidden bg-bgbody duration-200 hover:scale-105 hover:shadow-md cursor-pointer">
        <img className='w-full' src="/product-1.webp" alt="Product image" />
        <div className="p-4 text-primary/[0.9]">
            <h2 className="text-lg font-medium">Nike Jordan</h2>
            <div className="flex items-center text-primary/[0.5]">
                <p className="mr-2 text-lg font-semibold">&#36;200</p>
                <p className="text-base font-medium line-through">&#36;250</p>
                <p className="ml-auto text-[10px] font-medium text-success">12.50% de descuento</p>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard