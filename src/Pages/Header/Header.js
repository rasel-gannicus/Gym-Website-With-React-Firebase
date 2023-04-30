import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import './Header.css';
import menuTwo from '../../assets/img/menu.png';
import menuOne from '../../assets/img/menu (1).png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [username, setUsername] = useState('')

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

  // --- checking if user is logged in
  // const [user, loading, error] = useAuthState(auth);
  console.log(auth.currentUser);
  // const userName = auth?.currentUser?.displayName;
  useEffect(() => {
    if (auth?.currentUser?.displayName) {
      setUsername(auth?.currentUser?.displayName);
    }
  }, [auth, auth?.currentUser?.displayName])

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
            {auth?.currentUser?.accessToken ? <span>{username}</span> : <Link to="/login">Login</Link>}

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