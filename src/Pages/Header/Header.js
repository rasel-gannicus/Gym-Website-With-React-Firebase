import React, { useEffect, useRef, useState } from 'react';
import Banner from './Banner/Banner';
import './Header.css';
import menuTwo from '../../assets/img/menu.png';
import menuOne from '../../assets/img/menu (1).png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';


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
  const [user, loading, error] = useAuthState(auth);
  
  useEffect(() => {
    if (auth?.currentUser?.displayName) {
      setUsername(auth?.currentUser?.displayName);
    }
  }, [auth, auth?.currentUser?.displayName])

  // --- creating a toggle popup for profile clicking on header
  const [isActive, setIsActive] = useState(false);
  const profilePopupAnchor = document.querySelector('.profile-pop-anchor');
  const profilePopupMini = document.querySelector('.profile-pop p');
  const profilePopuplogout = document.querySelector('.logout');
  const toggleProfile = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  }

  // --- creating functionality for closing popup profile menu while clicking on any part of the webpage
  useEffect(() => {
    const handleDocumentClick = (event) => {
      // console.log('ok');
      if(event.target !== profilePopupAnchor && event.target !== profilePopupMini && event.target !== profilePopuplogout){
        setIsActive(false);
      }
    }  
    if (isActive) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }
  
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    }
  }, [isActive]);

  const profilePopup = <span className="profile-pop">
    <p>{username}</p>
    <p className="logout" >Logout</p>
  </span>

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
            {auth?.currentUser?.accessToken ? <span draggable className={`profile-pop-main ${isActive ? 'active' : ''}`}>
              <a onClick={toggleProfile} className="profile-pop-anchor">Profile
              <span className="caret-right"><FontAwesomeIcon icon={faCaretRight} /></span>
                <span className="caret-down"><FontAwesomeIcon icon={faCaretDown} /></span>
              </a>
              {profilePopup}
            </span> : <Link to="/login">Login</Link>}
          </div>
          {!auth?.currentUser?.accessToken ? '' : <div className="user-name">
            {/* <span className=""> User : {username}</span> */}
          </div>}

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