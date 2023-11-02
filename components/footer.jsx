import React, { useEffect, useState, useRef  } from 'react';

// API
import { getFooter, getNavigation} from '../pages/api/footer';

//Icon
import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";


const Footer = () => {

  const [navigation, setNavigation] = useState(null);
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const navigationData = await getNavigation();
      const footerData = await getFooter();
      if (navigationData) {
        setNavigation(navigationData);
      }
      if (footerData) {
        setFooter(footerData);
      }
    };

    fetchData();
  }, []);


  function renderSocialMediaIcon(iconName) {
    switch (iconName) {
      case 'facebook':
        return <ImFacebook />;
      case 'instagram':
        return <AiOutlineInstagram />;
      case 'linkedin':
        return <BiLogoLinkedin />;
      case 'youtube':
        return <BiLogoYoutube />;
      case 'asl':
        return <FaAmericanSignLanguageInterpreting />;
      case 'telephone':
        return <BsTelephone />;
      default:
        return null; 
    }
  }

  return (
    <footer className="footer">
      {footer && (
        <>
          <div className="container">
            <div className="benefits-area my-5">
              <div className="row">
                {footer.benefitsArea.img.data.map((item) => (
                  <div key={item.id} className="col-6 col-md-3 item">
                    <img src={item.attributes.url} alt={item.attributes.name} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mobile-app">
              <h2 className="title">Uygulamamızı İndirin</h2>
              <div className="d-flex justify-content-center align-items-center area">
                {footer.mobileApp.map((item) => (
                  <a key={item.id} className="item" href={item.url}>
                    <img
                      src={item.img.data.attributes.url}
                      alt={item.img.data.attributes.name}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="submenu mt-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <img
                    className="logo"
                    src={footer.logo.data.attributes.url}
                    alt={footer.logo.data.attributes.name}
                  />
                  <div className="tel-number">
                    <a href={`tel:${footer.telNumber.url}`}>
                      {renderSocialMediaIcon(footer.telNumber.icon)}{" "}
                      {footer.telNumber.text}
                    </a>
                  </div>
                  <p className="disability-title">{footer.disabilityDesc}</p>
                  <div className="disability">
                    <a href={`tel:${footer.disability.url}`}>
                      {renderSocialMediaIcon(footer.disability.icon)}{" "}
                      {footer.disability.text}
                    </a>
                  </div>
                </div>
                <div className="col-md-8 col-sm-12">
                  {navigation && (
                    <div className="row navigation">
                      {navigation.map((navItem) => (
                        <div key={navItem.id} className="col-md-3 col-sm-12">
                          <h2 className="title">{navItem.title}</h2>
                          <ul>
                            {navItem.items.map((item, itemIndex) => (
                              <li className="nav-item" key={itemIndex}>
                                <a href={item.path}>{item.title}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="social-media">
            <img
              className="background-img"
              src={footer.socialmediaImg.data.attributes.url}
              alt={footer.socialmediaImg.data.attributes.name}
            />
            <div className="area">
              <h1 className="title">{footer.socialmediaTitle}</h1>
              <ul className="d-flex justify-content-between align-items-center">
                {footer.socialmedia &&
                  footer.socialmedia.map((item) => (
                    <li key={item.id} className="social-media-item">
                      <a href={item.url}>{renderSocialMediaIcon(item.icon)}</a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </footer>
  );
}
export default Footer;
