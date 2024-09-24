import React from 'react';
import './HomeStyle.css';
import { Link } from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";


const Home = () => {
    return (
        <div className='container-home'>
        <h1>Logo</h1>
        <div className='container-home-options'>
            <Link to="/Login" className='choose-option'>
                <IoLogInOutline  className='icon-option'/>
                Logare
            </Link>
            <Link to="/Configure" className='choose-option'>
                <SlPeople className='icon-option'/>
                Configurare
            </Link>
        </div>
        </div>
    )
}

export default Home
