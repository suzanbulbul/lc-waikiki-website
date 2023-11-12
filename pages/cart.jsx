import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

//Slice
import { cartList } from '../store/Slice/CartSlice'

//API
import { getSkirtseById } from '../pages/api/skirts'; 

//Components
import Loading from '../components/loading';
import EmptyCart from '../components/common/cart/EmptyCart';
import CartContent from '../components/common/cart/CartContent';

const Cart = () => {
  const [cart, setCart]= useState();
  const [loading, setLoading] = useState(true);

  const selectedProduct = useSelector(cartList);

  useEffect(() => {
    const fetchDataFromApi = async () => {

        const featureData = await getSkirtseById(1);
        if (featureData) {
          setCart(featureData);
        }
    };

    fetchDataFromApi();
  }, []);

  useEffect(() => {
    if (!cart) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [cart]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="cart">
      {selectedProduct.length > 0 ? (
        <CartContent />
      ) : (
        <>
          <EmptyCart />
        </>
      )}
    </div>
  );
}


export default Cart