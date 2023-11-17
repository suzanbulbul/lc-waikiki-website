import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import Link from "next/link";

//Slice
import { cartList, removeToCart, updateAmountInCart } from '../../../store/Slice/CartSlice'
import { addToFavorite, favoriteList } from '../../../store/Slice/FavoriteSlice'

//Helpers
import { isProductAdd } from '../../../public/helper/isProductAdd'

//Icons
import { Dustbin, Favorite }  from '../../../public/icons/index';

//Toast
import toast from 'react-hot-toast';

const Calculate = ({selectedItem}) => { 
    const dispatch = useDispatch();
    const SelectedSize = selectedItem.product.size.find(item => item.size === selectedItem.size)

    const decreaseCalculate = () => {
      if(selectedItem.amount > 0){
        dispatch(updateAmountInCart({ id: selectedItem.id, amount: selectedItem.amount - 1 }))
      }
    };
    const increaseCalculate = () => {
      if(SelectedSize.piece > selectedItem.amount){
        dispatch(updateAmountInCart({ id: selectedItem.id, amount: selectedItem.amount + 1 }))
      }
      else{
        toast.error("Ürün stokta yok.")
      }
    };
  
    return (
      <div className="calculate">
        <div className="d-flex justify-content-between align-items-center ">
          <button onClick={decreaseCalculate}>-</button>
          <span>{selectedItem.amount}</span>
          <button onClick={increaseCalculate}>+</button>
        </div>
      </div>
    );
  }

const ListProduct = () => {
  const dispatch = useDispatch();
  const [allAmount, setAllAmount] = useState();

  const selectedProduct = useSelector(cartList);
  const favList = useSelector(favoriteList);

  useEffect(() => {
    totalAmount();
  }, [selectedProduct])

  const totalAmount = () => {
    let total = 0;
    selectedProduct.forEach((product) => {
      let amount = parseInt(product.amount, 10);
      let price = parseFloat(product.product.price.replace(",", "."));

      total += amount * price;

      setAllAmount(total.toFixed(2))
    });
  };

  const handleAddFavorite = (product) => {

    if (favList.length > 0 ){

      const compareProduct = isProductAdd(favList, product);

      if (compareProduct) {
        return toast.error("Ürün zaten favorilerde.");
      } else {
        dispatch(addToFavorite(product));
        return toast.success("Ürün favorilere eklendi.");
      }
    }
    else{
      dispatch(addToFavorite(product));
      toast.success("Ürün favorilere eklendi.");
    }
  }

  return (
    <ul>
      {selectedProduct.map((selectedItem) => (
        <li key={selectedItem.id}>
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
                Satıcı:
                <span className="bold">
                  {selectedItem.productContent.brandName}
                </span>
              </label>
            </div>
            <p className="text-middle bold">
              {690 - allAmount > 0 ? (
                <>
                  SEPETİNE
                  <span className="blue">{(690 - allAmount).toFixed(2)}</span>
                  TL &rsquo; LİK ÜRÜN EKLE, KARGO BEDAVA OLSUN!
                </>
              ) : (
                "ÜCRETSİZ KARGO"
              )}
            </p>
          </div>
          <div
            className={`cart-card ${selectedItem.amount == 0 && "disabled"}`}
          >
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
                        <Link href={selectedItem.url}>
                          <img
                            className="img"
                            src={
                              selectedItem.product.image.data[0]?.attributes
                                ?.url
                            }
                            alt="cart-img"
                          />
                        </Link>
                        <div
                          className="d-flex flex-column
                                justify-content-between
                                align-items-start"
                        >
                          <div>
                            <p className="font_18px-bold mb-1">
                              {selectedItem.productContent.brandDesc}
                            </p>
                            <p className="text-middle">
                              {selectedItem.productContent.features.productCode}
                            </p>
                          </div>
                          <div>
                            <p className="font-14px mb-1">
                              Beden: <b>{selectedItem.size}</b>
                            </p>
                            <p className="font-14px">
                              Renk: <b>{selectedItem.product.color}</b>
                            </p>
                          </div>
                        </div>
                      </div>
                      <Calculate selectedItem={selectedItem} />
                    </div>
                    {/* <span className="text-small">
                          Bu ürün hediye paketine uygun değildir.
                        </span> */}
                  </div>
                  <div className="col-4">
                    <div className="d-flex flex-column justify-content-start align-items-end h-100">
                      <div className="d-flex flex-column justify-content-between align-items-end mb-3">
                        <p className="font-14px mb-1">{`${parseFloat(
                          selectedItem.product.price.replace(",", ".")
                        )} x ${parseInt(selectedItem.amount, 10)}`}</p>
                        <p className="font_18px-bold blue">
                          =
                          {(
                            parseFloat(
                              selectedItem.product.price.replace(",", ".")
                            ) * parseInt(selectedItem.amount, 10)
                          ).toFixed(2)}
                          TL
                        </p>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          onClick={() =>
                            dispatch(removeToCart(selectedItem.id))
                          }
                          className="square-button me-2"
                        >
                          <Dustbin />
                        </button>
                        <button
                          onClick={() => handleAddFavorite(selectedItem)}
                          className="square-button"
                        >
                          <Favorite />
                        </button>
                      </div>
                      {/* <p className="text-small blue">Markalarda İndirim!</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListProduct