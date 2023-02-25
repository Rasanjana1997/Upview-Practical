import React, {useState} from 'react'
import {AiOutlineShoppingCart, AiOutlineDown} from "react-icons/ai"
import { useSelector } from 'react-redux'

function NavBar({logoUrl}) {

    const products = useSelector((state)=> state.cart.cart);
    const total = useSelector((state) => state.cart.total);
    const [showCart, setShowCart] = useState(false);

    console.log("total : ", total);
    console.log("p : ", products);

  return (

    <div className='w-full flex items-center justify-between border-b pb-2 '>

        <img className='w-[100px] h-[30px]' src={logoUrl} alt="app-logo" />

        <button onClick={() => setShowCart(!showCart)}>
            <div className='flex flex-row items-center gap-1'>
                <AiOutlineShoppingCart />
                <p>Cart</p>
                <AiOutlineDown />
            </div>
        </button>

        { showCart &&
            <div className='absolute z-20 flex flex-col w-[300px] bg-[#ffffff] border border-slate-300 rounded-lg right-20 top-16 pt-3 pb-3'>

            { products.map((product) => {
                return(
                    <div className='flex flex-row px-3 items-center mb-3'>
                        <img className='w-[25px] h-[25px]' src={product.image} alt={product.name} />
                        <div className='w-full flex flex-row items-center justify-between ml-3'>
                            <div className='flex flex-col'>
                                <p className='text-[14px] font-[500]'>{product.name}</p>
                                <p className='text-[12px]'>{product.description}</p>
                            </div>
                            <p className='slef-end'>$ {product.price}</p>
                        </div>
                    </div>
                )
            })
            }

            { products.length === 0 &&

                <div className='w-full flex items-center justify-center text-[14px] font-[500] pb-2'>
                    Cart Empty
                </div>

            }

            <div className='w-full flex flex-col items-end px-5 py-1 border-t '>
                <p>Total : $ {total}</p>
                <button className='flex items-center justify-center border w-[100px] border-slate-400 px-2 py-0.5 text-[14px] rounded-3xl'>
                    <div>
                        Checkout
                    </div>
                </button>
            </div>
            
        </div>}


    </div>
  )
}

export default NavBar