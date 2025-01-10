import sliderImg from "../assets/images/slider-img.png";
import { useTranslation } from 'react-i18next';

const Slider = () => {
    const { t } = useTranslation(); // Access the translation function

    return (
        <>
            <section className="slider_section ">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="detail-box">
                                <h1>
                                    {t('slider.titleLine1')} <br />
                                    {t('slider.titleLine2')} <br />
                                    {t('slider.titleLine3')}
                                </h1>
                                <p>
                                    {t('slider.description')}

                                </p>
                                <a href="#">
                                    {t('slider.contactUs')}
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={sliderImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Slider;