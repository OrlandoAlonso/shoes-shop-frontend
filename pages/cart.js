import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '@/components/Wrapper';
import CartItem from '@/components/CartItem';

const Cart = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
            {/* Heading and paragraph */}
            <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                <div className='text-2xl md:text-3xl mb-5 font-semibold leading-tight'>Carrito de compras</div>
            </div>
            {/* Heading and paragraph end */}

            {/* Cart content */}
            <div className='flex flex-col lg:flex-row gap-12 py-10'>
                {/* Cart items */}
                <div className='flex-[2]'>
                    <div className='text-lg font-bold'>Artículos del carrito</div>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                {/* Cart items end */}

                {/* Summary */}
                <div className='flex-[1]'>
                    <div className='text-lg font-bold'>Resumen</div>

                    <div className='p-5 my-5 bg-[#D9D9D9] rounded-xl'>
                        <div className='flex justify-between'>
                            <div className='uppercase text-base md:text-lg font-medium text-primary'>
                                Subtotal
                            </div>
                            <div className='text-base md:text-lg font-medium text-primary'>
                                &#36; 600.00
                            </div>
                        </div>
                        <div className='text-sm md:text-base py-5 border-t mt-5'>
                            El total refleja el precio total de su pedido, incluidos aranceles e impuestos. Antes de cualquier descuento aplicable.<br /><br />No incluye gastos de envío ni tasas de transacción internacional.
                        </div>
                    </div>

                    {/* Button checkout */}
                    <button className='w-full py-4 rounded-full bg-primary text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                        Comprar
                    </button>
                    {/* Button checkout end */}
                </div>
                {/* Summary end */}
            </div>
            {/* Cart content end */}

            {/* This is Cart empty */}
            {/* <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>
                <Image
                    src="/empty-cart.jpg"
                    width={300}
                    height={300}
                    className='w-[300px] md:w-[450px]'
                />

                <span className='text-xl font-bold'>
                    Tu carrito esta vac&#237;o
                </span>

                <span className='text-center mt-4'>
                    Parece que no has a&#241;adido nada a tu carrito.<br />Contin&#250;e y explore las categor&#237;as
                </span>

                <Link
                    href="/"
                    className='py-4 px-8 rounded-full bg-primary text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'
                >
                    Continuar Comprando
                </Link>
            </div> */}
            {/* Cart empty end */}
        </Wrapper>
    </div>
  )
}

export default Cart