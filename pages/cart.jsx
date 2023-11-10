import React, { useState } from 'react'
import Link from 'next/link'

//LottieFiles
import Lottie from 'lottie-react';
import emptyCart from '../public/animations/empty-cart.json';

//Icons
import { SlWallet } from 'react-icons/sl';
import { BsGift, BsBell } from 'react-icons/bs';


const Cart = () => {
  const [cart, setCart]= useState();

  const membershipAdvantage = [
    {
      id: 1,
      icon: <BsGift className="icon"/>,
      text: "İlk Siparişe Kargo Bedava",
    },
    {
      id: 2,
      icon: <SlWallet className="icon"/>,
      text: "Kapıda Nakit Ödeme Seçeneği",
    },
    {
      id: 3,
      icon: <BsBell className="icon"/>,
      text: "İndirimlerden Öncelikli Haberdar Olma İmkanı",
    },
  ];

  if(!cart){
    return (
      <div className="cart">
        <div className="cart-empty">
          <Lottie className="animation" animationData={emptyCart} />
          <h1 className="font_18px-bold mb-10">
            Sepetinizde ürün bulunmamaktadır.
          </h1>
          <p className="font_16px mb-10">
            LCWaikiki&rsquo;de binlerce ürün seni bekliyor.
          </p>
          <Link href="/#" className="primary-button">
            ALIŞVERİŞE BAŞLA
          </Link>
        </div>
        <div className="membership-advantage">
          <h1 className="font_14px-bold">Neden Üye Olmalısın?</h1>
          <div className="row">
            {membershipAdvantage.map((item) => (
              <div key={item.id} className="col-md-4 col-sm-12">
                <div className="membership-advantage-card">
                  <div className="card-content d-flex justify-content-center align-items-center">
                    {item.icon}
                    <p className="font_14px-bold">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/#" className="primary-button mb-10">
              ÜYE OL
            </Link>
            <Link className="text-small" href="/#">
              Zaten üye misin?
            </Link>
            <Link href="/#" className="secondary-button">
              GİRİŞ YAP
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">Cart</div>
  )
}

export default Cart