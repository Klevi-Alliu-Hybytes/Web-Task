import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
const Info = () => {
    const { t, i18n } = useTranslation();

    // Function to switch between English and Arabic
    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <>
            <section className="info_section">
                <div className="container">
                    {/*<div className="language-switcher">*/}
                    {/*    <button onClick={toggleLanguage}>*/}
                    {/*        {i18n.language === 'en' ? 'Switch to Arabic' : 'Switch to English'}*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    <h4>{t('info.getInTouch')}</h4>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="info_items">
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href="">
                                            <div className="item">
                                                <div className="img-box">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                                </div>
                                                <p>{t('info.address')}</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="">
                                            <div className="item">
                                                <div className="img-box">
                                                    <FontAwesomeIcon icon={faPhone} />
                                                </div>
                                                <p>{t('info.phone')}</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="">
                                            <div className="item">
                                                <div className="img-box">
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </div>
                                                <p>{t('info.email')}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-box">
                    <h4>{t('info.followUs')}</h4>
                    <div className="box">
                        <a href="https://facebook.com">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://twitter.com">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://youtube.com">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="https://instagram.com">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Info;
