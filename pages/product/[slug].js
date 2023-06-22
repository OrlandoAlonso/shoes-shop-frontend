import React from 'react';
import Wrapper from '@/components/Wrapper';
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className='w-full md:py-10 text-primary'>
        <Wrapper>
            <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                {/* left column */}
                <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                    <ProductDetailsCarousel />
                </div>
                {/* left column end */}

                {/* right column */}
                <div className='flex-[1] py-3'>
                    {/* product title */}
                    <div className='text-[24px] 4xl:text-[34px] font-semibold mb-2'>
                        Marca/Modelo del zapato
                    </div>
                    {/* product title end */}

                    {/* product subtitle */}
                    <div className='text-lg font-semibold mb-5'>
                        Zapatos para hombre
                    </div>
                    {/* product subtitle end */}

                    {/* product price */}
                    <div className='text-lg font-semibold'>
                        &#36; 200
                    </div>
                    {/* product price end */}

                    {/* size range */}
                    <div className='my-10'>
                        <div className='flex justify-between mb-2'>
                            <div className='text-base font-semibold'>Selecciona tu talla</div>
                            <div className='text-sm font-medium text-primary/[0.5] cursor-pointer hover:underline'>Guía de tallas</div>
                        </div>

                        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>6</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>6.5</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>7</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>7.5</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>8</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>8.5</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>9</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>9.5</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>10</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>10.5</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>11</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>11.5</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>12</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium hover:border-primary cursor-pointer'>12.5</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium cursor-not-allowed bg-primary/[0.1] opacity-50'>13</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium cursor-not-allowed bg-primary/[0.1] opacity-50'>14</div>
                            <div className='border border-shadowbox rounded-md text-center py-3 font-medium cursor-not-allowed bg-primary/[0.1] opacity-50'>15</div>
                        </div>
                        
                        <div className='text-error mt-1'>
                            Es necesario seleccionar la talla
                        </div>
                    </div>
                    {/* size range end */}

                    {/* add to cart button */}
                    <button className='w-full py-4 rounded-full bg-primary text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                        Add to cart
                    </button>
                    {/* add to cart button end */}

                    {/* Whislist button */}
                    <button className='w-full py-4 rounded-full border border-primary text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>
                        Favorito
                        <IoMdHeartEmpty size={20} />
                    </button>
                    {/* Whislist button end */}

                    {/* Description product */}
                    <div>
                        <div className='text-lg font-bold mb-5'>Detalles del producto</div>
                        <div className='text-base mb-5'>
                            Fusce egestas elit eget lorem. Curabitur blandit mollis lacus. Ut non enim eleifend felis pretium feugiat. Ut leo. Fusce risus nisl, viverra et, tempor et, pretium in, sapien.
                        </div>
                        <ul className='list-disc ml-6 text-base lg:text-sm'>
                            <li>Color Mostrado: Blanco/Naranja/Azul/Negro</li>
                            <li>Estilo: CW2288-111</li>
                        </ul>
                    </div>
                    {/* Description product end */}
                </div>
                {/* right column end */}
            </div>

            <RelatedProducts />
        </Wrapper>
    </div>
  );
};

export default ProductDetails;