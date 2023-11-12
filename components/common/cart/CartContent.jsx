import React, { useState } from "react";
import { useSelector} from 'react-redux'
import Link from "next/link";

//Slice
import { cartList } from '../../../store/Slice/CartSlice'

//Components
import PaymentStep from "./PaymentStep";
import ListProduct from "./ListProduct";

//Icons
import { Dustbin, Arrow } from "../../../public/icons/index";

const CartContent = () => {
  const selectedProduct = useSelector(cartList);

  return (
    <div className="shopping">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="d-flex justify-content-between">
            <h2 className="font_18px-bold dark">
              Sepetim ({selectedProduct.length})
            </h2>
            <Link className="font_14px-bold blue" href="/">
              <Arrow className="icon-left_180 me-1" />
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
            <button className="link-button">
              <Dustbin className="me-1" />
              Seçilenleri Sil (1)
            </button>
          </div>
          <ListProduct
            data={selectedProduct}
          />
          <div className="line"></div>
        </div>
        <PaymentStep />
      </div>
    </div>
  );
};

export default CartContent;
