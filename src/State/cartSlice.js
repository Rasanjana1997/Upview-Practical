import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.total += action.payload.price
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    // addToCart: (state, action) => {
    //   state.total += action.payload.price
    //   console.log("hfhfh: ", state.products);
    //   let selectedItem = state.products.find((item)=>{
    //       return(item?.id === action.payload.product.id);
    //   })
    //   if(selectedItem){
    //       selectedItem.quantity += 1;
    //       let index = state.products.findIndex((item)=>{
    //         return(item?.id === action.payload.product.id);
    //       });
    //     state.products[index] = selectedItem;
    //   } else {
    //       state.products.push({...action.payload.product, quantity: 1});
    //   }
    // },
    // removeFromCart: (state, action) => {
    //   state.total -= action.payload.price
    //   let selectedItem = state.products.find((item)=>{
    //     return(item?.id === action.payload.product.id);
    //   })
    //   if(selectedItem){
    //     selectedItem.quantity += 1;
    //     let itemIndex = state.products.findIndex((item) => {
    //       return(item.id === selectedItem.id);
    //     })
    //     state.products = state.products.splice(itemIndex, 1);
    //   }
    // },
  },
})

export const { addToCart, removeFromCart } = cardSlice.actions

export default cardSlice.reducer