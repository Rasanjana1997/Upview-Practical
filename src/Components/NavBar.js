import React, {useState} from 'react'
import {AiOutlineShoppingCart, AiOutlineDown} from "react-icons/ai"
import { useSelector } from 'react-redux'

function NavBar({logoUrl}) {

    const products = useSelector((state)=> state.cart.products);
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
            <div className='absolute z-20 flex flex-col h-[200px] w-[300px] bg-[#ffffff] border border-slate-300 rounded-lg right-20 top-16'>

            { products.map((product) => {
                return(
                    <div className='flex flex-row'>
                        <img src={product.image} alt={product.name} />
                        <div className='flex flex-col'>
                            <p>{product.name}</p>
                            <p></p>
                        </div>
                        <p></p>
                    </div>
                )
            })
            }

            <div className='w-full flex flex-col items-end px-5 py-1'>
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