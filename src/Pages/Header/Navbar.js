import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../utilities/firebase.init';
import menuTwo from '../../assets/img/menu.png';
import menuOne from '../../assets/img/menu (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight, faCaretSquareDown , faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import userPic from '../../assets/img/user (3).png';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [username, setUsername] = useState('');
  const [photo, setPhoto] = useState(userPic);

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
    headerMenu?.classList.remove('active');
    menuOne?.classList.remove('active');
    menuTwo?.classList.remove('active');
  }


  function handleResize() {
    if (window.innerWidth <= 481) {
      setIsSticky(false);
    }
  }

  function handleScroll() {
    const banner = document.querySelector('.banner-details h1');

    if (window.innerWidth > 481) {
      if (window.scrollY > banner?.offsetHeight) {
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

  // let photo = '';
  useEffect(() => {
    if (auth?.currentUser?.displayName) {
      setUsername(auth?.currentUser?.displayName);
      console.log(auth.currentUser.photoURL);
      // setPhoto(auth.currentUser.photoURL);
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
      if (event.target !== profilePopupAnchor && event.target !== profilePopupMini && event.target !== profilePopuplogout) {
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

  // --- mobile menu toggler 
  const navbarRight = document.querySelector('.header-right');
  const mobileMenuIcon = document.querySelector('.menuOne');
  function handleMobileClick(event) {
    if (!event.target.classList.contains('menuOne') && !event.target.classList.contains('header-right') && !event.target.classList.contains('profile-pop-anchor')) {
      hideMenu();
    }
  }
  document.addEventListener('click', handleMobileClick);

  // --- logging out 
  const [signOut, signOutLoading, signoutError] = useSignOut(auth);
  const handleLogout = () => {
    signOut();
  }

  const profilePopup = <span className="profile-pop">
    <p>{username} <span><img src={photo} alt=""/></span></p>
    <hr />
    <Link to='userService'>Your Service</Link>
    <p draggable onClick={handleLogout} className="logout" >Logout</p>
  </span>

  return (
    <div className={!isSticky ? 'header-nav' : 'header-nav sticky'}>
      <div className="header-left">
        <h1>Fitness</h1>
      </div>
      <div className="header-right">
        <div className="header-right-menu">
          <Link to="/">Home</Link>
          <Link to="">About</Link>
          <Link to="">Trainers</Link>
          <Link to="/services">Services</Link>
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
  );
};

export default Navbar;