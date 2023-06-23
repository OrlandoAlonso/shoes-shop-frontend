import React from 'react';

//import icons
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({ src, name, subtitle, price }) => {
  return (
    <div className='flex py-9 gap-3 md:gap-5 border-b'>
        {/* Image */}
        <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
            <img src="/product-1.webp" alt="Imagen del articulo del carrito" />
        </div>
        {/* Image end */}

        <div className='w-full flex flex-col'>
            <div className='flex flex-col md:flex-row justify-between'>
                {/* Product title */}
                <div className='text-base md:text-xl font-semibold text-primary/[0.8]'>
                    Nike Jordan
                </div>
                {/* Product title end */}

                {/* Product subtitle */}
                <div className='text-sm md:text-base font-medium text-primary/[0.5] block md:hidden'>
                    Zapatos para hombre
                </div>
                {/* Product subtitle end */}

                {/* Product price */}
                <div className='text-sm md:text-base font-bold text-primary/[0.5] mt-2'>
                    &#36;200
                </div>
                {/* Product price end */}
            </div>

            <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2 md:gap-10 text-primary/[0.5] text-sm md:text-base'>
                    <div className='flex items-center gap-2'>
                        <div className='font-semibold'>Talla:</div>
                        <select className='hover:text-primary hover:bg-shadowbox bg-shadowbox/[0.5] rounded-md px-1 transition-colors duration-300'>
                            <option value="1">6</option>
                            <option value="2">6.5</option>
                            <option value="3">7</option>
                            <option value="4">7.5</option>
                            <option value="5">8</option>
                            <option value="6">8.5</option>
                            <option value="7">9</option>
                            <option value="8">9.5</option>
                            <option value="9">10</option>
                            <option value="10">10.5</option>
                            <option value="11">11</option>
                            <option value="12">11.5</option>
                            <option value="13">12</option>
                            <option value="14">12.5</option>
                        </select>
                    </div>

                    <div className='flex items-center gap-1'>
                        <div className='font-semibold'>Cantidad:</div>
                        <select className='hover:text-primary hover:bg-shadowbox bg-shadowbox/[0.5] rounded-md px-1 transition-colors duration-300'>
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="1">5</option>
                            <option value="1">6</option>
                            <option value="1">7</option>
                            <option value="1">8</option>
                            <option value="1">9</option>
                            <option value="1">9</option>
                            <option value="1">10</option>
                        </select>
                    </div>
                </div>
                <RiDeleteBin6Line className='cursor-pointer text-primary/[0.5] hover:text-primary text-base md:text-xl' />
            </div>
        </div>
    </div>
  );
};

export default CartItem;