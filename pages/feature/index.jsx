import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'; // next/link'i içe aktarın
import { fetchData } from '../api/feature'; 

function Feature() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const apiData = await fetchData();
      if (apiData) {
        setData(apiData);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div className="feature">
      <div className="row">
        {data &&
          data.map((item) => {
            const feature = item.attributes;

            return (
              <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
                <div className="card">
                  {feature.color.map(
                    (color) =>
                      color.enable && (
                        <Link href={`/feature/${item.id}`} key={color.id}>
                            <div
                              className="form-check form-check-inline p-0 m-0"
                            >
                              {color.image.data.map((image) => (
                                <img
                                  className="card-img-top"
                                  src={image.attributes.url}
                                  alt={image.attributes.name}
                                  key={image.id}
                                />
                              ))}
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">{feature.title}</h5>
                              <p className="card-text">{feature.desc}</p>
                              <b>{color.price}</b>
                            </div>
                        </Link>
                      )
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Feature;
