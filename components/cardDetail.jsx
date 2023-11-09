
import React, { useEffect, useState } from 'react';

function CardDetail({data}) {
  const [selectedColor, setSelectedColor] = useState();
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    if( data ){
      const selectColor= data.color.filter(item => item.enable === true);
      setSelectedColor(selectColor[0])

    }
  }, [data])

  const handleButtonClick = (size) => {
    setSelectedButton(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  
  const hanleAddCart = () => {
    const index = selectedColor.size.findIndex((size) => size.size === selectedButton);
    
    if (index !== -1 && selectedColor.size[index].piece > 0) {      
      selectedColor.size[index].piece = selectedColor.size[index].piece - 1;
      setSelectedButton(null);

      console.log("Sepete eklendi");
    } else {
      console.log("Sepete eklenemedi", selectedColor);
    }
  }

  console.log(selectedColor)

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
                        size.piece != 0  && selectedButton === size.size && "selected"
                      } ${size.piece == 0 && "disabled"}`}
                      onClick={() => handleButtonClick(size.size)}
                      key={size.id}
                    >
                      {size.size}
                      {size.piece}
                    </button>
                  ))}
                </div>
              </div>
              <button disabled={!selectedButton} onClick={hanleAddCart} className="primary-button">SEPETE EKLE</button>
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