import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js";
        script.async = true;
        script.onload = () => {
            const map = new window.google.maps.Map(document.getElementById("googleMap"), {
                center: { lat: 40.712775, lng: -74.005973 },
                zoom: 15,
            });
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = t("contact.errorName");
        if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) newErrors.phone = t("contact.errorPhone");
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t("contact.errorEmail");
        if (!formData.message.trim()) newErrors.message = t("contact.errorMessage");
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const mailto = `mailto:info.oecleaningservices@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${formData.name}%0APhone:%20${formData.phone}%0AEmail:%20${formData.email}%0AMessage:%20${formData.message}`;
            window.location.href = mailto;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section className="contact_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2 id="ContactUs">{t("contact.heading")}</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={t("contact.namePlaceholder")}
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <small className="error">{errors.name}</small>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder={t("contact.phonePlaceholder")}
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <small className="error">{errors.phone}</small>}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t("contact.emailPlaceholder")}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <small className="error">{errors.email}</small>}
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    className="message-box"
                                    placeholder={t("contact.messagePlaceholder")}
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.message && <small className="error">{errors.message}</small>}
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
