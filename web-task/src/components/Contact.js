import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pinIcon from '../assets/images/pin_icon.svg'; // Import as URL

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
    const [errors, setErrors] = useState({});

    const northamptonCoordinates = [52.2405, -0.9027]; // Northampton coordinates
    const customIcon = L.icon({
        iconUrl: pinIcon, // Use the SVG as a URL
        iconSize: [32, 32], // Set the size of your icon
        iconAnchor: [16, 32], // Anchor point for proper alignment
        popupAnchor: [0, -32], // Popup position relative to the marker
    })
    const validateForm = () => {
        const newErrors = {};
        const phoneRegex = /^\+?[0-9\s-()]{10,14}$/;

        if (!formData.name.trim()) newErrors.name = t("contact.errorName");
        if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
            newErrors.phone = t("contact.errorPhone");
        }
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t("contact.errorEmail");
        }
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
        <section id= "ContactUs" className="contact_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>{t("contact.heading")}</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form className= "contactForm" onSubmit={handleSubmit}>
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
                                <MapContainer
                                    center={northamptonCoordinates}
                                    zoom={12}
                                    style={{ height: '400px', width: '100%' }}
                                >
                                    {/* OpenStreetMap Tile Layer */}
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />

                                    {/* Custom Marker */}
                                    <Marker position={northamptonCoordinates} icon={customIcon}>
                                        <Popup>
                                            <b>O&E Shine And Sparkle Cleaning LTD</b>
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
