import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// API
import { getNavigation } from '../../../pages/api/header'; 

const HeaderBottom = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const headerData = await getNavigation("header");
        if (headerData) {
          setData(headerData);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className="header_bottom">
      <ul className="d-flex justify-content-start align-items-center">
        {data &&
          data.map((item) => (
            <li key={item.id} className="dropdown">
              <label className="dropdown-toggle">{item.title}</label>
              <div className="dropdown-menu">
                <nav className="container-fluid">
                  <ul>
                    <li className="d-flex justify-content-start align-items-start">
                      {item.items.map((subItem) => {
                        return (
                          <div key={subItem.id}>
                            {/* <Link
                              href={subItem.path}
                              className="dropdown-item"
                            >
                              {subItem.title}
                            </Link> */}
                            <label className="dropdown-item">
                              {subItem.title}
                            </label>
                            {subItem.items.length > 0 && (
                              <ul>
                                {subItem.items.map(
                                  (nestedItem) =>
                                    nestedItem.path !== `${subItem.path}/#` &&
                                    nestedItem.path !== `${subItem.path}/#` && (
                                      <li key={nestedItem.id}>
                                        {nestedItem.path ==
                                        `${subItem.path}/skirts` ? (
                                          <Link
                                            href={nestedItem.path}
                                            className="nestedItem-item active"
                                          >
                                            {nestedItem.title}
                                          </Link>
                                        ) : (
                                          <button
                                            type="button"
                                            className="nestedItem-item disable"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Coming Soon..."
                                          >
                                            {nestedItem.title}
                                          </button>
                                        )}
                                      </li>
                                    )
                                )}
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </li>
                  </ul>
                </nav>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HeaderBottom