import React from 'react';
import '../styles/Footer.css'
import WhistleL from '../assets/whistleGreenL.png';

const Footer = () => {

    return(
        <footer className="footer">
            <img className="img-ball" src={WhistleL} alt="whistle, football and cards"/>
            <div className='social-icons'>
                <a href="https://facebook.com" target="_blank">
                <span className="social-icon"><i className="fa-brands fa-facebook fa-2xl" /></span>
                </a>
                <a href="https://instagram.com" target="_blank">
                <span className="social-icon"><i className="fa-brands fa-instagram fa-2xl"></i></span>
                </a>
                <a href="https://tiktok.com" target="_blank">
                <span className="social-icon"><i className="fa-brands fa-tiktok fa-2xl" ></i></span>
                </a>
            </div>
        </footer>
    );
}

export default Footer


{/* <div> Stickers made by <a href="https://www.flaticon.com/authors/stickers" title="Stickers"> Stickers </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div> */}