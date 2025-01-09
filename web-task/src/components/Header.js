import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import "../assets/css/bootstrap.css";
import "../assets/css/responsive.css";
import "../assets/css/style.css";



const Header = () => {
    return (
        <>

            <header className="header_section">

                {/* Top Header Section */}
                <div className="header_top">
                    <div className="container-fluid">
                        <div className="contact_nav">
                            <a href="tel:+01123455678990">
                                <FontAwesomeIcon icon={faPhone}/>
                                <span>Call : +01 123455678990</span>
                            </a>
                            <a href="mailto:demo@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <span>Email : demo@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bottom Header Section with Navigation */}
                <div className="header_bottom">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container">
                            <Link className="navbar-brand" to="/">
                                <span>Inance</span>
                            </Link>
                            {/* Navbar Toggler for Mobile View */}
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className=""> </span>
                            </button>
                            {/* Navigation Links */}
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/services">
                                            Services
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">
                                            Contact Us
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