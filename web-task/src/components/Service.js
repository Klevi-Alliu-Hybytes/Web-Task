
import s1Img from "../assets/images/s1.png";
import s2Img from "../assets/images/s2.png";
import s3Img from "../assets/images/s3.png";
import { useTranslation } from 'react-i18next';

const Service = () => {
    const { t } = useTranslation(); // Access the translation function

    return (
    <>
    <section className="service_section layout_padding">
        <div className="container ">
            <div className="heading_container heading_center">
                <h2> {t('service.title')}</h2>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-4 mx-auto">
                    <div className="box ">
                        <div className="img-box">
                            <img src={s1Img} alt=""/>
                        </div>
                        <div className="detail-box">
                            <h5>
                                {t('service.maintenance')}
                            </h5>
                            <p>
                                {t('service.maintenanceDescription')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 mx-auto">
                    <div className="box ">
                        <div className="img-box">
                            <img src={s2Img} alt=""/>
                        </div>
                        <div className="detail-box">
                            <h5>
                                {t('service.electrical')}
                            </h5>
                            <p>
                                {t('service.electricalDescription')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 mx-auto">
                    <div className="box ">
                        <div className="img-box">
                            <img src={s3Img} alt=""/>
                        </div>
                        <div className="detail-box">
                            <h5>
                                {t('service.plumbing')}
                            </h5>
                            <p>
                                {t('service.plumbingDescription')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-box">
                <a href="">
                    >{t('service.viewMore')}
                </a>
            </div>
        </div>
    </section>

</>
)
}

export default Service;