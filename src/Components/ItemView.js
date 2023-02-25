import React, {useState, useEffect} from 'react'
import axios from 'axios';
import StarRating from './StarRating';
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../State/cartSlice';

const url = "https://my-json-server.typicode.com/kodplex/pr-re-ec-product/db";

function ItemView(props) {

    const dispatch = useDispatch();

    function handleAddToCart() {
        dispatch(addToCart({...data.ecommerce.product, quantity: 1}));
    }

    const [data, setData] = useState(null);

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null); 
    const [itemCount, setItemCount] = useState(1);

    useEffect(()=>{
        if(data){
            setSelectedImage(data.ecommerce.product.images[0].image);
            setSelectedColor(data.ecommerce.product.images[0].color);
            console.log("image : ", data.ecommerce.product.images[0].image)
        }
    }, [data])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get(url);
          console.log("res : ", result);
          setData(result.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
  
    }, []);
  
    console.log("dara : ", data);

    function handleColorChage(color) {
        setSelectedColor(color);

        const newImage = data.ecommerce.product.images.find((image) => {
            return(image.color === color);
        })

        setSelectedImage(newImage.image);

    }
  
    if(!data){
      return(
        <div>
           Loading...
        </div>
      )
    }

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3'>

        <div className='flex flex-col '>

            <div className='bg-[#f4f4f7] w-[36vw] h-[36vw] flex items-center justify-center rounded-lg'>
                <img className='w-[50%]' src={selectedImage} alt={data.name} />
            </div>

            <div className='flex flex-row items-center justify-between mt-4 w-[36vw]'>

                {data.ecommerce.product.images.map((image, index) => {
                    return(
                        <div onClick={()=> setSelectedImage(image.image) } key={index} className='bg-[#f4f4f7] w-[120px] h-[120px] flex items-center justify-center cursor-pointer rounded-lg'>
                            <img className='w-[50%]' src={image.image} alt={data.name} />
                        </div>
                    )
                })
                }

            </div>

        </div>

        <div>

            <div className='flex flex-col border-b pb-5'>

                <p className='text-[25px] font-[700]'>{data.ecommerce.product.name}</p>
                <p className='text-[13px]'>{data.ecommerce.product.description}</p>
                <div className='flex flex-row items-center mt-2'>
                    <StarRating rating={data.ecommerce.product.rating} totalStars={5} />
                    <p className='text-slate-500 text-[13px] ml-2 '>&#40;<span>{data.ecommerce.product.ratedBy}</span>&#41;</p>
                </div>

            </div>

            <div className='flex flex-col border-b pb-5 mt-10'>

                <p className='text-[20px] font-[600]'> $ <span> {data.ecommerce.product.price} </span>.00 <span>or </span>{data.ecommerce.product.installment.amount} <span>.00</span>/<span>{data.ecommerce.product.installment.period}</span></p>
                <p className='text-[13px]'>{data.ecommerce.product.installment.description}</p>

            </div>

            <div className='flex flex-col border-b pb-5 mt-10'>

                <p className='text-[18px] font-[500]'>Choose Color</p>

                <div className='flex flex-row items-center gap-5 mt-2'>

                { data.ecommerce.product.colors.map((color, index)=>{
                    return(
                        <div onClick={()=>handleColorChage(color)} className={`p-2 rounded-[50%] ${color === selectedColor ? "border" : ""} border-[#2FC338]`} >
                            <div key={index} style={{backgroundColor:`#${color}`}} className='w-[40px] h-[40px] rounded-[50%] cursor-pointer'>

                            </div>
                        </div>
                    )
                })
                }

                </div>

            </div>

            <div className='flex flex-col pb-5 mt-10'>
                
                <div className='flex flex-row'>

                    <div className='flex flex-row items-center justify-between bg-slate-200 w-[100px] px-3 py-2 rounded-xl'>
                        <button onClick={()=> setItemCount(itemCount - 1)}>
                            <AiOutlineMinus />
                        </button>
                        <p>{itemCount}</p>
                        <button onClick={()=> setItemCount(itemCount + 1)}>
                            <AiOutlinePlus />
                        </button>
                    </div>

                    <div className='flex flex-col ml-5'>
                        <p>Only <span>{data.ecommerce.product.stock}</span> Items left!</p>
                        <p>Don't miss it</p>
                    </div>

                </div>

                <div className='flex flex-row items-center mt-4 gap-3'>
                    <button className='flex items-center justify-center bg-[#2C9644] text-[#ffffff] px-8 py-2 rounded-3xl '>
                        <div>
                            Buy Now
                        </div>
                    </button>
                    <button onClick={()=> handleAddToCart()} className='flex items-center justify-center border border-slate-500 text-slate-500 px-8 py-2 rounded-3xl '>
                        <div>
                            Add to Cart
                        </div>
                    </button>
                </div>


            </div>


        </div>
        
    </div>
  )

}

export default ItemView