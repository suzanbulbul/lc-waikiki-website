import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

//Slice
import { cartList } from '../store/Slice/CartSlice'

//LottieFiles
import emptyCart from "../public/animations/empty-cart.json";

//Components
import Loading from '../components/loading';
import EmptyContent from '../components/common/EmptyContent';
import CartContent from '../components/common/cart/CartContent';

const Cart = () => {
  const [cart, setCart]= useState();
  const [loading, setLoading] = useState(true);

  const selectedProduct = useSelector(cartList);

  useEffect(() => {
    setCart(selectedProduct);
    setLoading(selectedProduct.length === 0);
  }, [selectedProduct]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="cart">
      {cart.length > 0 ? (
        <CartContent />
      ) : (
        <>
          <EmptyContent
            title="Sepetinizde ürün bulunmamaktadır."
            desc="LCWaikiki'de binlerce ürün seni bekliyor."
            animationData={emptyCart}
          />
        </>
      )}
    </div>
  );
}


export default Cart