import React, {useRef, useEffect } from 'react';
import logo from '../../assets/logo.png';
import '../../App.css';

export const NavBar = () => {
  const primaryNavRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const handleToggleClick = () => {
    const isExpanded = primaryNavRef.current.getAttribute('aria-expanded');
    primaryNavRef.current.setAttribute('aria-expanded', isExpanded === 'false' ? 'true' : 'false');
  };

  const handleContainerClick = (e) => {
    if (!primaryNavRef.current.contains(e.target) && !toggleButtonRef.current.contains(e.target)) {
      primaryNavRef.current.setAttribute('aria-expanded', 'false');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleContainerClick);

    return () => {
      document.removeEventListener('click', handleContainerClick);
    };
  }, []);

  return (
    <div className="container">
      <header className="site-header">
        <div className="header__content--flow">
          <section className="header-content--left">
           
              <img className="brand-logo" src={logo} alt="logo" />
            
            <button className="nav-toggle" onClick={handleToggleClick} ref={toggleButtonRef}>
              <span className="toggle--icon"></span>
            </button>
          </section>
          <section className="header-content--right">
            <nav className="header-nav" role="navigation">
              <ul className="nav__list" ref={primaryNavRef}>
                <li className="list-item">
                  <a className="nav__link" href="#home">
                    Home
                  </a>
                </li>
                <li className="list-item">
                  <a className="nav__link" href="#about">
                    Login
                  </a>
                </li>
                <li className="list-item">
                  <a className="nav__link" href="#products">
                    Profiles
                  </a>
                </li>
                <li className="list-item">
                  <a className="nav__link" href="#contacts">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </header>
    </div>
  );
};
