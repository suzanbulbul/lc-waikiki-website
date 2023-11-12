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
    }
});

export const { addToCart } = cartSlice.actions;
export const cartList = (state) => state.cart.cartList;
export default cartSlice.reducer;