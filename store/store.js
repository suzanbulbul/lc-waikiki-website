import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { cartSlice } from './Slice/CartSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      cart: cartSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);