"use client"

import React from 'react'
import { useCartStore } from '@/store/store'
import { Product } from '@/dummydata'
import { products } from '@/dummydata'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



interface Props {
	product: Product
}

export default function Products({ product }: Props) {

  const addToCart = useCartStore(state => state.addToCart)

  const handleAddToCart = (card: Product) => {
    addToCart(card);
    toast.success(`Product added to cart successfully!`, {
      position: "bottom-left",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: 0,
transition: Slide,
      style: {
        backgroundColor: 'white',
        color: 'black',
      }
      });
  };

    

  return (
    <div>
        <div className='mt-16 '>
        <div  className="mx-10  md:ml-14 md:mb-3 gap-14 md:flex md:flex-wrap">
            {products.map((card) => (
            <div key={card.id} className="pt-14 bg-gray-50 ">
                <div className=' flex items-center justify-center'>
                     
            <img
            src={card.image}
            alt=""
            className="object-cover h-[200px] "
            />
            </div>

            <div className=' bg-gray-500/80 mt-10 mb-10 md:mb-0'>

            <h2 className="font-extrabold text-base ml-3 pt-5 ">{card.title}</h2>
            <p className="text-sm pt-2 pb-5 ml-3">Headphones</p>

            <div className='flex gap-[140px] mx-1 '>
            <p className='   text-lg font-medium '>${card.price}.00</p>
            <button
						type='button'
						className=' bg-yellow-800 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-600 hover:text-white'
						onClick={() => handleAddToCart(card)}
					>
						Add to Cart
					</button>
          </div>
            </div>


            </div>
            ))};
          </div>
        </div>
        <ToastContainer  />
    </div>
  )
}
