import aboutImg from "../assets/images/cl3.png";
import { useTranslation } from 'react-i18next';
const About = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className="about_section layout_padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="detail-box">
                                <h2>{t('about.title')}</h2>
                                <p>{t('about.description')}</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="img-box">
                                <img src={aboutImg} alt={t('about.altText')}  style={{ width: '700px', height: '485px' }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default About;