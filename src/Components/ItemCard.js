import React from 'react';
import {AiOutlineHeart} from "react-icons/ai";
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../State/cartSlice';

function ItemCard({product}) {

    const dispatch = useDispatch();

    function handleAddToCart() {
        dispatch(addToCart({...product, quantity: 1}));
    }

  return (

    <div className='flex flex-col z-10'>

        <div className='flex items-center justify-center h-[300px] bg-[#f4f4f7] shadow-md rounded-md relative'>

            <img className='w-[50%]' src={product.image} alt={product.name} /> 

            <button className='w-[40px] h-[40px] rounded-[50%] bg-[#ffffff] p-2 flex items-center justify-center absolute top-3 right-3'>
                <AiOutlineHeart />
            </button>

        </div>

        <Link to={{pathname:"/item-view", state:{product}}} >
            <div className=' w-[100%] flex flex-row items-center justify-between my-1'>
                <p className='text-[14px] font-[600]'>{product.name}</p>
                <p><sup>$</sup>{product.price}<sup>00</sup></p>
            </div>
        </Link>

        <div className=''>
            <p className='text-[13px] text-slate-400'>{product.description}</p>
        </div>

        <div className='my-1'>
            <StarRating rating={product.rating} totalStars={5} />
        </div>

        <div className='my-1'>
            <button onClick={() => handleAddToCart()} className='border border-[#000000] rounded-3xl py-1 px-3 text-[13px] text-slate-500 hover:bg-[#2C9644] hover:text-[#ffffff] hover:border-[#2C9644]'>
                <div>
                    Add to Cart
                </div>
            </button>
        </div>

    </div>

  )
 
}

export default ItemCard