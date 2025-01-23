import sliderImg from "../assets/images/cl2.png";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Slider = () => {
    const { t } = useTranslation(); // Access the translation function
    const handleScroll = (sectionId) => {
        window.location.hash = sectionId;
    }
    useEffect(() => {
        if (window.location.hash === "#contact-us") {
            document.getElementById("contact-us")?.scrollIntoView();
        }
    }, []);

    return (
        <>
            <section className="slider_section ">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="detail-box">
                                <h1>
                                    {t('slider.titleLine1')} <br/>
                                    {t('slider.titleLine2')} <br/>
                                    {t('slider.titleLine3')}
                                </h1>
                                <p>
                                    {t('slider.description')}

                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={sliderImg} alt="" className="responsive-img"/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};
export default Slider;