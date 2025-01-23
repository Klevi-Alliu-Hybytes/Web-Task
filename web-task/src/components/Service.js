
import { useTranslation } from 'react-i18next';
import { ReactComponent as S1Icon } from '../assets/images/clean2.svg';
import { ReactComponent as S2Icon } from '../assets/images/clean3.svg';
import { ReactComponent as S3Icon } from '../assets/images/clean4.svg';
import { ReactComponent as S4Icon } from '../assets/images/clean5.svg';
import { ReactComponent as S5Icon } from '../assets/images/clean6.svg';
import { ReactComponent as S6Icon } from '../assets/images/clean7.svg';

const Service = () => {
    const { t } = useTranslation(); // Access the translation function

    return (
    <>
    <section id="serviceId" className="service_section layout_padding">
        <div className="container ">
            <div className="heading_container heading_center">
                <h2> {t('service.title')}</h2>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-4 mx-auto">
                    <div className="box ">
                        <div className="img-box">
                            <S1Icon />
                        </div>
                        <div className="detail-box">
                            <h5>
                                {t('service.s1')}
                            </h5>
                            <p>
                                {t('service.s1Text')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 mx-auto">
                    <div className="box ">
                        <div className="img-box">
                            <S2Icon />
                        </div>
                        <div className="detail-box">
                            <h5>
                                {t('service.s2')}
                            </h5>
                            <p>
                                {t('service.s2Text')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 mx-auto">
                    <div className="box ">
                        <div className="img-box">
                            <S3Icon />
                        </div>
                        <div className="detail-box">
                            <h5>
                                {t('service.s3')}
                            </h5>
                            <p>
                                {t('service.s3Text')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 mx-auto">
                    <div className="box ">
                        <div className="img-box">
                            <S4Icon />
                        </div>
                        <div className="detail-box">
                            <h5>
                                {t('service.s4')}
                            </h5>
                            <p>
                                {t('service.s4Text')}
                            </p>
                        </div>
                    </div>
                </div>


                <div className="col-sm-6 col-md-4 mx-auto">
                    <div className="box ">
                        <div className="img-box">
                            <S5Icon />
                        </div>
                        <div className="detail-box">
                            <h5>
                                {t('service.s5')}
                            </h5>
                            <p>
                                {t('service.s5Text')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 mx-auto">
                    <div className="box ">
                        <div className="img-box">
                            <S6Icon />
                        </div>
                        <div className="detail-box">
                            <h5>
                                {t('service.s6')}
                            </h5>
                            <p>
                                {t('service.s6Text')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
    )
}

export default Service;