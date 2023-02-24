import React from 'react'
import ItemCard from '../ItemCard'

function Home({productList}) {
  return (
    <>
    <p className='text-[25px] font-[700] mt-3'>Best Sellers</p>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3'>
        {productList.map((product) => <ItemCard key={product.id} product={product}/>)}
    </div>
    </>
  )
}

export default Home