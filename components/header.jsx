import Link from 'next/link';
import React, { useEffect, useState, useRef  } from 'react';

// API
import { getNavigation } from '../pages/api/header'; 

//Icon
import { AiOutlineSearch } from "react-icons/ai";
import { CiCreditCard1 } from "react-icons/ci";
import { PiTruckLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { BsBag } from "react-icons/bs";


const Header = () => {

  const [data, setData] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const headerData = await getNavigation("header");
      if (headerData) {
        setData(headerData);
      }
    };

    fetchData();
  }, []);

  const handleSearchInputClick = () => {
    const headerSearch = document.querySelector('.header-search');
    headerSearch.classList.add('active');
  }

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      const headerSearch = document.querySelector('.header-search');
      headerSearch.classList.remove('active');
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <header className="header">
      <div className="header_top bg-body-tertiary">
        <div className="container">
          <div className="d-flex justify-content-md-between justify-content-sm-center align-items-center">
            <section className="header-marketing-management">
              <p>Binlerce Marka Tek Tıkla LC Waikiki’de</p>
            </section>
            <div className="d-none d-sm-block">
              <ul className="d-flex justify-content-between align-items-center">
                <li className="nav-link-item">
                  <Link
                    href="#"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <CiCreditCard1 className="icon" />
                    Hediye Kartı Satın Al
                  </Link>
                </li>
                <li className="nav-link-item  ">
                  <Link
                    href="#"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <PiTruckLight className="icon" />
                    Sipariş Takip
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header_middle d-flex justify-content-between align-items-center">
          <Link className="header-logo" href="/home">
            <img
              src="https://res.cloudinary.com/ditprd5xt/image/upload/v1698758803/LC_Waikiki_logo_e6457ed5ef.png"
              alt="logo"
            />
          </Link>
          <div className="d-none d-sm-block search-container">
            <form
              className="header-search d-flex justify-content-between"
              role="search"
            >
              <div className="header-search-input">
                <AiOutlineSearch className="icon" />
                <input
                  type="search"
                  placeholder="Ürün, kategori veya marka ara"
                  aria-label="Search"
                  onClick={handleSearchInputClick}
                  ref={inputRef}
                />
              </div>
              <button className="" type="submit">
                Ara
              </button>
            </form>
          </div>

          <div className="header-top-icon">
            <ul className="d-flex justify-content-between align-items-center">
              <li>
                <Link
                  href="#"
                  className="d-flex flex-column align-items-center"
                >
                  <FaRegUser className="icon" />
                  Giriş Yap
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="d-flex flex-column align-items-center"
                >
                  <MdFavoriteBorder className="icon" />
                  Favorilerim
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="d-flex flex-column align-items-center"
                >
                  <BsBag className="icon" />
                  Sepetim
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile Search Start*/}
        <div className="d-block d-sm-none header_middle">
          <div className='search-container'>
             <form className="header-search row" role="search">
            <div className="col-10 header-search-input">
              <AiOutlineSearch className="icon" />
              <input
                type="search"
                placeholder="Ürün, kategori veya marka ara"
                aria-label="Search"
              />
            </div>
            <button className="col-2" type="submit">
              Ara
            </button>
          </form>
          </div>
         
        </div>
        {/* Mobile Search End*/}
        <div className="header_bottom">
          <ul className="d-flex justify-content-start align-items-center">
            {data &&
              data.map((item) => (
                <li key={item.id} className="dropdown">
                  <Link
                    className="dropdown-toggle"
                    href={item.path}
                    role="button"
                  >
                    {item.title}
                  </Link>
                  <div className="dropdown-menu">
                    <nav className='container'>
                      <ul>
                        <li className="d-flex justify-content-start align-items-start">
                          {item.items.map((subItem) => {
                            return (
                              <div key={subItem.id}>
                                <Link
                                  href={subItem.path}
                                  className="dropdown-item"
                                >
                                  {subItem.title}
                                </Link>
                                {subItem.items.length > 0 && (
                                  <ul>
                                    {subItem.items.map((nestedItem) => (
                                      <li key={nestedItem.id}>
                                        <Link
                                          href={nestedItem.path}
                                          className="nestedItem-item"
                                        >
                                          {nestedItem.title}
                                        </Link>
                                      </li>
                                    ))}
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
      </div>
    </header>
  );
}

export default Header;
