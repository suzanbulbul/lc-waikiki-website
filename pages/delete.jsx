import React from 'react'
import { useDispatch} from 'react-redux'

//Slice
import { removeAllCart } from '../store/Slice/CartSlice'
import { removeAllFavorite } from '../store/Slice/FavoriteSlice'

const Delete = () => {
    const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(removeAllFavorite())}>
        Favorileri sil
      </button>
      <button onClick={() => dispatch(removeAllCart())}>Sepeti sil</button>
    </div>
  );
}

export default Delete