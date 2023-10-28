import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';


import logo from '../public/logo.jpg';

const Header = () => {
  const router = useRouter();

  return (
    <header className="App-header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link href="/home">
            <Image className="logo" src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/home">home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">about</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/feature">feature</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
