import { createSlice } from "@reduxjs/toolkit"; 

const loadState = () => {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = localStorage.getItem('cartState');
      if (serializedState === null) {
        console.log('localStorage is empty');
        return undefined;
      }
      return JSON.parse(serializedState);
    }
  } catch (err) {
    console.log(err);
    return undefined;
  }
};
  
const saveState = (state) => {
try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
} catch (err) {
  console.log(err);
}
};
  
const initialState = loadState() || {
    cartList: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartList.push(action.payload);
            saveState(state);
        },
        removeToCart: (state, action) => {          
            state.cartList = state.cartList.filter((item) => item.id !== action.payload);
            saveState(state);
        },
        removeAllCart: (state) => {
            state.cartList = [];
            saveState(state);
        },
        updateAmountInCart: (state, action) => {
          const { id, amount } = action.payload;
          const selectedItem = state.cartList.find((item) => item.id === id);
          if (selectedItem) {
            selectedItem.amount = amount;
            saveState(state);
          }
        },
    }
});

export const { addToCart,removeToCart, removeAllCart, updateAmountInCart } = cartSlice.actions;
export const cartList = (state) => state.cart.cartList;
export default cartSlice.reducer;