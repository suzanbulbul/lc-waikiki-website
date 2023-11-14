import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { cartSlice } from './Slice/CartSlice';
import { favoriteSlice } from './Slice/FavoriteSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      cart: cartSlice.reducer,
      favorite: favoriteSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);