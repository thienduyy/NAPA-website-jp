import styles from './index.module.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NAPALogo from 'assets/images/napa/company-logo.png';
import NAPALogoWhite from 'assets/images/napa/logo_napa.svg';
// import { FetchNavbar } from 'services/data/general';
// import parser from 'html-react-parser';
// import { FetchIntroBanner } from 'services/data/home';
import { headerNavigations } from 'navigations';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

function Header() {
  const [activePath, setActivePath] = useState(-1);
  const [changeNav, setChangeNav] = useState(false);
  const currentPath = useLocation();
  // const { loadingBanner, introBanner, errorBanner } = FetchIntroBanner();
  // const { loadingNav, navbar, errorNav } = FetchNavbar();
  // const parse2 = (text, placeholder) =>
  //   loadingNav ? placeholder ?? '' : parser(text?.['en'] ?? '');
  // useEffect(() => {
  //   const href = window.location.pathname;
  //   !loadingNav &&
  //     !errorNav &&
  //     navbar.pages.map((entry, index) => {
  //       if (entry.path === href) {
  //         setActivePath(index);
  //       }
  //       return null;
  //     });
  // });
  //scroll
  const scrollEvent = () => {
    // console.log('execute', window.pageYOffset, changeNav)
    if (window.pageYOffset !== 0 && changeNav === false) {
      setChangeNav(true)
    }
    // if (window.pageYOffset === 0 && changeNav === true) {
    if (window.pageYOffset === 0) {
      setChangeNav(false)
    } 
  }
  useEffect(() => {
    const path = headerNavigations.findIndex(menu => menu.path === currentPath.pathname);
    
    setActivePath(path);
    window.addEventListener('scroll', scrollEvent);
 
    return function cleanup () {
      window.removeEventListener('scroll', scrollEvent);
    }
 }, [])

  const handleClickMenu = () => {
    var btnMenu = document.querySelector(`.${styles.wrapMenu}`);
    btnMenu.classList.toggle(styles.change);
    var menu = document.querySelector(`.${styles.menuMobile}`);
    menu.classList.toggle(styles.collapse);
  };

  const handleClickItem = (index) => {
    setActivePath(index);
    var menu = document.querySelector(`.${styles.menuMobile}`);
    menu.classList.remove(styles.collapse);
    var btnMenu = document.querySelector(`.${styles.wrapMenu}`);
    btnMenu.classList.toggle(styles.change);
  };

  return (
    <header className={clsx(styles.root, (currentPath.pathname === '/' || currentPath.pathname === 'home') && styles.fixedNav, changeNav && styles.darkNav)}>
      <div className={styles.wrapNav}>
        <a href='/'>
          <img
            alt='NAPA Global Logo'
            src={NAPALogoWhite}
            className={styles.companyLogo}
          />
        </a>
        <nav className={styles.navigation}>
          <ul className={styles.listNavigationTitle}>
            {headerNavigations.map((page, index) => (
              <li key={index} className={styles.wrapLink}>
                <Link
                  key={index}
                  to={page.path}
                  onClick={() => setActivePath(index)}
                  className={
                    activePath === index ? styles.linkActive : styles.link
                  }
                >
                  {page.name}
                </Link>
                {activePath === index ? (
                  <div className={styles.borderBottom} />
                ) : (
                  <></>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <a href='#consultation-section' className={styles.btnHeader}>
          Get a Quotes
        </a>
        <div className={styles.wrapMenu} onClick={handleClickMenu}>
          <div className={styles.bar1} />
          <div className={styles.bar2} />
          <div className={styles.bar3} />
        </div>
      </div>
      <div className={styles.menuMobile}>
        <ul className={styles.mobileNav}>
          {headerNavigations.map((page, index) => (
            <li
              key={index}
              className={activePath === index ? styles.active : undefined}
              onClick={() => handleClickItem(index)}
            >
              <Link key={index} to={page.path}>
                {page.name}
              </Link>
              <i className={styles.arrow} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
