import { createSlice } from "@reduxjs/toolkit"; 

const loadState = () => {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = localStorage.getItem('favoriteState');
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
    localStorage.setItem('favoriteState', serializedState);
} catch (err) {
  console.log(err);
}
};
  
const initialState = loadState() || {
    favoriteList: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
      addToFavorite: (state, action) => {
          state.favoriteList.push(action.payload);
          saveState(state);
      },
      removeToFavorite: (state, action) => {          
        state.favoriteList = state.favoriteList.filter((item) => item.id !== action.payload);
        saveState(state);
      },
      removeAllFavorite: (state) => {
        state.favoriteList = [];
        saveState(state);
    }
  }
});


export const { addToFavorite, removeToFavorite, removeAllFavorite } = favoriteSlice.actions;
export const favoriteList = (state) => state.favorite.favoriteList;
export default favoriteSlice.reducer;