import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';

//Slice
import { addToCart } from '../store/Slice/CartSlice'

//Toast
import toast from 'react-hot-toast';

const CardDetail = ({data}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if( data ){
      const selectColor = data.color.filter((item) => item.enable === true);
      setSelectedColor(selectColor[0]);
    }
  }, [data])

  const handleButtonClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  
  const hanleAddCart = () => {
    const index = selectedColor.size.findIndex((size) => size.size === selectedSize);
  
    if (index !== -1 && selectedColor.size[index].piece > 0) {      
      const updatedSizes = [...selectedColor.size];
      updatedSizes[index] = { ...updatedSizes[index], piece: updatedSizes[index].piece - 1 };
      
      setSelectedSize(null);

      const selectedData = {
        id: '_' + Math.random().toString(36).substr(2, 9),
        size: selectedSize,
        amount: 1,
        product: { ...selectedColor, size: updatedSizes },
        productContent: data.attribute,
        // url: router.asPath
        url: "/",
      };
  
      dispatch(addToCart(selectedData));
      toast.success("Sepete eklendi");
    } else {
      toast.error("Sepete eklenemedi");
    }
  };

  return (
    <div className="card-detail">
      {data && selectedColor && (
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
            <div className="card">
              <div className="row">
                {selectedColor.image.data.map((image, index) => (
                  <div key={image.id} className="col-6 mb-20">
                    <img
                      className="card-img-top"
                      src={image.attributes.url}
                      alt={image.attributes.name}
                      key={index}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
            <div className="card-body m-0">
              <div className="product-code">
                Ürün Kodu:
                <br />
                {data.attribute.features.productCode} - {selectedColor.color}
              </div>
              <p className="card-desc">{data.attribute.brandDesc}</p>
              <div className="card-price">
                <label>Peşin Fiyatı</label>
                <br />
                <b className="price">{selectedColor.price}</b>
              </div>
              <div className="product-size">
                <h5 className="font_14px-bold">Beden:</h5>
                <div className="d-flex justify-left">
                  {selectedColor.size.map((size) => (
                    //selected
                    <button
                      disabled={size.piece == 0}
                      className={`product-size-item mx-2 ${
                        size.piece != 0  && selectedSize === size.size && "selected"
                      } ${size.piece == 0 && "disabled"}`}
                      onClick={() => handleButtonClick(size.size)}
                      key={size.id}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>
              <button disabled={!selectedSize} onClick={hanleAddCart} className="primary-button">SEPETE EKLE</button>
            </div>
            <div className="card-body">
              <div className="product-color">
                <h5 className="font_14px-bold">
                  Renkler: ({data.color.length})
                </h5>
                <div className="d-flex justify-left align-items-start">
                  {data.color.map((color) => (
                    <button
                      key={color.id}
                      className={`product-color-item ${
                        selectedColor.color === color.color && "selected"
                      }`}
                      checked={selectedColor.id === color.id}
                      onClick={() => handleColorChange(color)}
                    >
                      <span className="d-flex column align-items-center">
                        <img
                          className="card-img-top"
                          src={color.image.data[0].attributes.url}
                          alt={color.image.data[0].attributes.name}
                        />
                        <p className="text-small">{color.color}</p>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDetail;