import React from "react";
import './headercss.css'
import CTA from './CTA'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Mia Demirdal</h1>
                <h5 className="text-light">Aspiring full time SWE!!</h5>
                <CTA />
            </div>
        </header>
    )
}

export default Header;
