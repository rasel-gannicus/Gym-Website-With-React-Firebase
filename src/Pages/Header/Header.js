import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import './Header.css';
import menuTwo from '../../assets/img/menu.png';
import menuOne from '../../assets/img/menu (1).png';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    const displayMenu = () => {
        const menuOne = document.querySelector('.menuOne');
        const menuTwo = document.querySelector('.menuTwo');
        const headerMenu = document.querySelector('.header-right');
        menuOne.classList.add('active');
        menuTwo.classList.add('active');
        headerMenu.classList.add('active');
    }
    const hideMenu = () => {
        const menuOne = document.querySelector('.menuOne');
        const menuTwo = document.querySelector('.menuTwo');
        const headerMenu = document.querySelector('.header-right');
        headerMenu.classList.remove('active');
        menuOne.classList.remove('active');
        menuTwo.classList.remove('active');
    }


    function handleResize() {
        if (window.innerWidth <= 481) {
          setIsSticky(false);
        }
      }
    
      function handleScroll() {
        const banner = document.querySelector('.banner-details h1');
    
        if (window.innerWidth > 481) {
          if (window.scrollY > banner.offsetHeight) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        } else {
            setIsSticky(false);
        }
      }
    
      useEffect(() => {
        handleResize();
        handleScroll();
    
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div className="full-header">
            <div className={!isSticky ? 'header-nav' : 'header-nav sticky'}>
                <div className="header-left">
                    <h1>Fitness</h1>
                </div>
                <div className="header-right">
                    <div className="header-right-menu">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Trainers</a>
                        <a href="">Blog</a>
                        <a href="">Contact</a>
                    </div>
                </div>
                <div className="menu-icon">
                    <img onClick={displayMenu} className="menuOne" src={menuOne} alt="" />
                    <img onClick={hideMenu} className="menuTwo" src={menuTwo} alt="" />
                </div>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Header;