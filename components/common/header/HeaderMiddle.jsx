import React, { useEffect, useRef  } from 'react';
import Link from 'next/link';

//Icons
import { Search, User, Favorite, Bag} from "../../../public/icons"

const HeaderMiddle = () => {
    const inputRef = useRef(null);
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
    <div>
         <div className="header_middle d-flex justify-content-between align-items-center">
          <Link className="header-logo" href="/">
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
                <Search className="icon" />
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
                  <User className="icon" />
                  Giriş Yap
                </Link>
              </li>
              <li>
                <Link
                  href="/favorite"
                  className="d-flex flex-column align-items-center"
                >
                  <Favorite className="icon" />
                  Favorilerim
                </Link>
              </li>

              <li>
                <Link
                  href="/cart"
                  className="d-flex flex-column align-items-center"
                >
                  <Bag className="icon" />
                  Sepetim
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile Search Start*/}
        <div className="d-block d-sm-none header_middle">
          <div className="search-container">
            <form className="header-search row" role="search">
              <div className="col-10 header-search-input">
                <Search className="icon" />
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
    </div>
  )
}

export default HeaderMiddle