import React from 'react'

//Icons
import { Lock, Warning } from '../../../public/icons/index';

const PaymentStep = () => {
    return (
      <div className="col-lg-4 col-md-12 col-sm-12">
        <button className="primary-button mb-10">ÖDEME ADIMINA GEÇ</button>
        <div className="bg-gray">
          <div>
            <div className="d-flex justify-content-between align-items-center secure-shopping">
              <h1 className="font_20px-bold">Sipariş Özeti</h1>
              <p className="text-middle bold d-flex justify-content-center align-items-center">
                <Lock className="me-1" /> Güvenli Sipariş
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <p>Ürün Toplam</p>
              <p>112,50 Tl</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <p>İndirim</p>
              <p>150,00 Tl</p>
            </div>
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
          <button className="primary-button mt-3">ÖDEME ADIMINA GEÇ</button>
        </div>
        <p className="text-middle mb-1">* Fiyatlara KDV dahildir.</p>
        <div className="d-flex justify-start align-items-center">
          <p className="text-middle">
            <Warning className="me-1" />
            Sepete eklenen ürünleri diğer müşterilerimiz satın alabilmektedir.
            Stoklar tükenmeden alışveriş işlemlerinizi tamamlayınız.
          </p>
        </div>
      </div>
    );
  
  }
export default PaymentStep