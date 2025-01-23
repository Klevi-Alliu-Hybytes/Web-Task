import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
const Info = () => {
    const { t, i18n } = useTranslation();

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
                                        <a
                                            href="https://www.google.com/maps?q=52.2405,-0.9027"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <div className="item">
                                                <div className="img-box">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                                </div>
                                                <p>{t('info.address')}</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="tel:+447351206618">
                                            <div className="item">
                                                <div className="img-box">
                                                    <FontAwesomeIcon icon={faPhone} />
                                                </div>
                                                <p>{t('info.phone')}</p>

                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="mailto:info.oecleaningservices@gmail.com">
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
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://www.facebook.com/share/19ErTACexu/?mibextid=wwXIfr">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://www.tiktok.com/@oe7131?_t=ZG-8t9HgvwzCca&_r=1">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://www.instagram.com/oe_shinesparklecleaningservice?igsh=enkzOW4xamg3cTd6&utm_source=qr">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Info;
