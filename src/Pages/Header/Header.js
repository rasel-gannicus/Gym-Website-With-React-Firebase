import React, { useEffect, useRef, useState } from 'react';
import Banner from './Banner/Banner';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';


const Header = () => {
  
  return (
    <div className="full-header">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Header;