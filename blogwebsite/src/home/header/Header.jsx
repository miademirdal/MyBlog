import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/ME2.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Mia Demirdal</h1>
                <h5 className="text-light">Junior at Wentworth IT!</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="Picture of me" />
                </div>


                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;
