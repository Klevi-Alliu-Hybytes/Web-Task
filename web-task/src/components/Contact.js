import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation(); // Access the translation function

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js";
        script.async = true;
        script.onload = () => {
            // After the script is loaded, initialize the map
            const map = new window.google.maps.Map(document.getElementById("googleMap"), {
                center: { lat: 40.712775, lng: -74.005973 },
                zoom: 15,
            });
        };
        document.head.appendChild(script);

        return () => {
            // Cleanup script if the component unmounts
            document.head.removeChild(script);
        };
    }, []);

    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2 id="ContactUs">{t("contact.heading")}</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form action="">
                            <div>
                                <input type="text" placeholder={t("contact.namePlaceholder")} />
                            </div>
                            <div>
                                <input type="text" placeholder={t("contact.phonePlaceholder")} />
                            </div>
                            <div>
                                <input type="email" placeholder={t("contact.emailPlaceholder")} />
                            </div>
                            <div>
                                <input type="text" className="message-box" placeholder={t("contact.messagePlaceholder")} />
                            </div>
                            <div className="d-flex">
                                <button type="submit">{t("contact.sendButton")}</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="map_container">
                            <div className="map">
                                <div id="googleMap" style={{ width: "100%", height: "400px" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
