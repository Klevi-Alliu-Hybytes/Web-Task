import professionalImg from "../assets/images/professional-img.png";
import { useTranslation } from 'react-i18next';

const Professional = () => {
    const { t } = useTranslation(); // Access the translation function

    return (
        <>
            <section className="professional_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={professionalImg} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="detail-box">
                                <h2>
                                    {t('professional.title1')} <br/>
                                    {t('professional.title2')}
                                </h2>
                                <p>
                                    {t('professional.description')}
                                </p>
                                <a href="">
                                    {t('professional.readMore')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Professional;