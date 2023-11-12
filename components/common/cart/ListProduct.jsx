import React, { useState } from 'react'
import { useSelector} from 'react-redux'

//Slice
import { cartList } from '../../../store/Slice/CartSlice'

//Icons
import { Dustbin, Favorite }  from '../../../public/icons/index';

//Toast
import toast from 'react-hot-toast';

const Calculate = ({selectedItem, setPiece}) => {
  
    const [calculate, setCalculate] = useState(1);
    setPiece(calculate);  
    const SelectedSize = selectedItem.product.size.find(item => item.size === selectedItem.size)
  
    const decreaseCalculate = () => {
      if(calculate > 0){
        setCalculate(calculate - 1);
      }
    };
    const increaseCalculate = () => {
      if(SelectedSize.piece > calculate){
        setCalculate(calculate + 1);
      }
      else{
        toast.error("Ürün stokta yok.")
      }
    };
  
    return (
      <div className="calculate">
        <div className="d-flex justify-content-between align-items-center ">
          <button onClick={decreaseCalculate}>-</button>
          <span>{calculate}</span>
          <button onClick={increaseCalculate}>+</button>
        </div>
      </div>
    );
  }

const ListProduct = () => {
  const [piece, setPiece] = useState();

  const selectedProduct = useSelector(cartList);

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
                SEPETİNE 0,01 TL &rsquo; LİK ÜRÜN EKLE
              </p>
            </div>
            <div className={`cart-card ${piece == 0 && "disabled"}`}>
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
                            src={
                              selectedItem.product.image.data[0].attributes.url
                            }
                            alt="cart-img"
                          />
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
                                {
                                  selectedItem.productContent.features
                                    .productCode
                                }
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
                        <Calculate
                          selectedItem={selectedItem}
                          setPiece={setPiece}
                        />
                      </div>
                      <span className="text-small">
                        Bu ürün hediye paketine uygun değildir.
                      </span>
                    </div>
                    <div className="col-4">
                      <div className="d-flex flex-column justify-content-between align-items-end h-100">
                        <p>{selectedItem.product.price}</p>
                        <div className="d-flex justify-content-center align-items-center">
                          <button className="square-button me-2">
                            <Dustbin />
                          </button>
                          <button className="square-button">
                            <Favorite />
                          </button>
                        </div>
                        <p className="text-small blue">Markalarda İndirim!</p>
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