import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import "../assets/css/bootstrap.css";
import "../assets/css/responsive.css";
import "../assets/css/style.css";
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo1.jpg';
import {useState} from "react";


const Header = () => {
    const { t } = useTranslation(); // Access the translation function
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen); // Toggle the state
    };

    return (
        <>

            <header className="header_section">

                {/* Top Header Section */}
                <div className="header_top">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            {/* Phone Contact */}
                            <div
                                className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
                                <a href="tel:+447351206618" className="contact-item d-flex align-items-center">
                                    <FontAwesomeIcon icon={faPhone} className="me-2"/>
                                    <span>{t('header.call')}: +447351206618</span>
                                </a>
                            </div>

                            {/* Email Contact */}
                            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                                <a href="mailto:info.oecleaningservices@gmail.com?subject=Cleaning%20Service%20Inquiry&body=Hi%20there,%0A%0AI%20would%20like%20to%20inquire%20about%20your%20cleaning%20services."
                                   className="contact-item d-flex align-items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="me-2"/>
                                    <span>{t('header.email')}: info.oecleaningservices@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Header Section with Navigation */}
                <div className="header_bottom">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container">
                            <Link className="navbar-brand d-flex align-items-center" to="/">
                                <img
                                    src={logo}
                                    alt="O&E Shine And Sparkle Cleaning LTD Logo"
                                    className="logo img-fluid"
                                />

                                <span className="ml-2 brand-text"> O&E Shine And Sparkle Cleaning LTD</span>
                            </Link>
                            {/* Navbar Toggler for Mobile View */}
                            <button
                                className="navbar-toggler"
                                type="button"
                                onClick={toggleNavbar} // Custom toggle function
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded={isNavbarOpen ? 'true' : 'false'} // Set aria-expanded based on state
                                aria-label={t('header.toggleNavigation')}
                            >
                                <span className=""> </span>
                            </button>
                            {/* Navigation Links */}
                            <div
                                className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} // Apply 'show' class when open
                                id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">
                                            {t('header.home')}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/#aboutUsId">
                                            {t('header.about')}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#serviceId">
                                            {t('header.services')}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#ContactUs">
                                            {t('header.contactUs')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>


    );
};

export default Header;