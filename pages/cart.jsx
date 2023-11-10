import React, { useState, useEffect } from 'react'
import Link from 'next/link'

//API
import { getSkirtseById } from '../pages/api/skirts'; 

//LottieFiles
import Lottie from 'lottie-react';
import emptyCart from '../public/animations/empty-cart.json';

//Icons
import { SlWallet } from 'react-icons/sl';
import { BsGift, BsBell } from 'react-icons/bs';

//Components
// import Loading from '../components/loading';


const Cart = () => {
  const [cart, setCart]= useState();
  const [loading, setLoading] = useState(true);
  const [discount, setDiscount]= useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {

        const featureData = await getSkirtseById(1);
        if (featureData) {
          setCart(featureData);
        }
    };

    fetchDataFromApi();
  }, []);

  // useEffect(() => {
  //   if (!cart) {
  //     setLoading(true);
  //   } else {
  //     setLoading(false);
  //   }
  // }, [cart]);

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

  // if (loading) {
  //   return <Loading />;
  // }

  console.log(cart);

  return (
    <div className="cart">
      {cart ? (
        <div className="shopping">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="d-flex justify-content-between">
                <h2 className="font_18px-bold dark">Sepetim (1 Ürün)</h2>
                <Link className="font_14px-bold blue" href="/">
                  Alışverişe Devam Et
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label font_14px-bold"
                    htmlFor="flexRadioDefault1"
                  >
                    Tümünü Seç
                  </label>
                </div>
                <button className="link-button">Seçilenleri Sil (1)</button>
              </div>
              <div className="d-flex justify-content-between align-items-center bg-gray p-0 py-2">
                <div className="form-check m-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label font_14px"
                    htmlFor="flexRadioDefault1"
                  >
                    Satıcı: <span className="bold">{cart.attribute.brandName}</span>
                  </label>
                </div>
                <p className="text-middle bold">
                  SEPETİNE 0,01 TL &rsquo; LİK ÜRÜN EKLE
                </p>
              </div>
              <div className="cart-card">
                <div className="form-check m-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <div>
                    <div className="row">
                      <div className="col-8">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-center">
                            <img
                              className="img"
                              src={cart.color[0].image.data[0].attributes.url}
                              alt="suzan"
                            />
                            <div
                              className="d-flex flex-column
                          justify-content-between
                          align-items-start"
                            >
                              <div>
                                <p className="font_18px-bold mb-1">
                                {cart.attribute.brandDesc}
                                </p>
                                <p className="text-middle">
                                  {cart.attribute.features.productCode}
                                </p>
                              </div>
                              <div>
                                <p className="font-14px mb-1">
                                  Beden: <b>{cart.color[0].size[0].size}</b>
                                </p>
                                <p className="font-14px">
                                  Renk: <b>{cart.color[0].color}</b>
                                </p>
                              </div>
                            </div>
                          </div>
                          calculate
                        </div>
                        <span className="text-small">
                          Bu ürün hediye paketine uygun değildir.
                        </span>
                      </div>
                      <div className="col-4">
                        <div className="d-flex flex-column justify-content-between align-items-end h-100">
                          <p>{cart.color[0].price}</p>
                          <div className="d-flex justify-content-center align-items-center">
                            <button className="link-button">Sil</button>
                            <button className="link-button">Kaydet</button>
                          </div>
                          <p className="text-small blue">Markalarda İndirim!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line"></div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <button className="primary-button mb-10">
                ÖDEME ADIMINA GEÇ
              </button>
              <div className="bg-gray">
                <div>
                  <div className="d-flex justify-content-between align-items-center secure-shopping">
                    <h1 className="font_20px-bold">Sipariş Özeti</h1>
                    <p className="text-middle bold d-flex justify-content-center align-items-center">
                      Güvenli Sipariş
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p>Ürün Toplam</p>
                    <p>{cart.color[0].price}</p>
                  </div>
                  {discount && (
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p>İndirim</p>
                      <p>150,00 Tl</p>
                    </div>
                  )}
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p>Ara Toplam</p>
                    <p>449,99 Tl</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p>Kargo İşlemi</p>
                    <p>29.00 TL</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="font_14px-bold text-center total-discount-box">
                      <p className="font_18px-bold">Toplam İndirim</p>
                      <br />
                      <span className="font_18px-bold">150,00 TL</span>
                    </div>
                    <div className="font_14px-bold text-center">
                      <p className="font_18px-bold">Genel İndirim</p>
                      <br />
                      <span className="font_18px-bold">478,99 TL</span>
                    </div>
                  </div>
                </div>
                <div className="line"></div>

                <button className="coupon-code-link">
                  <span>Kupon Kodu Gir</span>
                  <span>+</span>
                </button>

                <div className="line"></div>

                <div className="form-check addGiftboxCheck ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Hediye Paketi İstiyorum
                  </label>
                </div>
                <p className="text-middle">
                  Sepetindeki ürünler hediye paketine uygun değildir.
                </p>
                <button className="primary-button mt-3">
                  ÖDEME ADIMINA GEÇ
                </button>
              </div>
              <p className="text-middle mb-1">* Fiyatlara KDV dahildir.</p>
              <div className="d-flex justify-start align-items-center">
                <p className="text-middle">
                  Sepete eklenen ürünleri diğer müşterilerimiz satın
                  alabilmektedir. Stoklar tükenmeden alışveriş işlemlerinizi
                  tamamlayınız.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="cart-empty">
            <Lottie className="animation" animationData={emptyCart} />
            <h1 className="font_18px-bold mb-10">
              Sepetinizde ürün bulunmamaktadır.
            </h1>
            <p className="font_16px mb-10">
              LCWaikiki&rsquo;de binlerce ürün seni bekliyor.
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
      )}
    </div>
  );
}

export default Cart