import React from 'react'
import Link from 'next/link'

//LottieFiles
import Lottie from 'lottie-react';

//Icons
import { Wallet, Gift, Bell } from '../../public/icons/index';

const EmptyContent = ({animationData, title, desc}) => {
  
  const membershipAdvantage = [
    {
      id: 1,
      icon: <Gift className="icon" />,
      text: "İlk Siparişe Kargo Bedava",
    },
    {
      id: 2,
      icon: <Wallet className="icon" />,
      text: "Kapıda Nakit Ödeme Seçeneği",
    },
    {
      id: 3,
      icon: <Bell className="icon" />,
      text: "İndirimlerden Öncelikli Haberdar Olma İmkanı",
    },
  ];

  return (
    <>
      <div className="cart-empty">
        <Lottie className="animation" animationData={animationData} />
        <h1 className="font_18px-bold mb-10">
          {title}
        </h1>
        <p className="font_16px mb-10">
          {desc}
        </p>
        <Link href="/" className="primary-button">
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
    </>
  );
}

export default EmptyContent