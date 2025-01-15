import { useTranslation } from 'react-i18next';
import { ReactComponent as RefreshIcon } from "../assets/images/refresh.svg";  // Import the SVG as a React component

const Feature = () => {
    const { t } = useTranslation(); // Access the translation function

    return (
        <>
<section className="feature_section">
    <div className="container">
        <div className="feature_container">
            <div className="box">
                <div className="img-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">

                        <g fill="none" stroke="yellow" strokeWidth="3">
                            <path d="M75 25 L80 40 L95 40 L82 50 L87 65 L75 55 L63 65 L68 50 L55 40 L70 40 Z"/>

                            <path d="M45 45 L50 60 L65 60 L52 70 L57 85 L45 75 L33 85 L38 70 L25 60 L40 60 Z"/>

                            <path d="M105 35 L110 50 L125 50 L112 60 L117 75 L105 65 L93 75 L98 60 L85 50 L100 50 Z"/>

                            <path
                                d="M55 105 L60 120 L75 120 L62 130 L67 145 L55 135 L43 145 L48 130 L35 120 L50 120 Z"/>

                            <path
                                d="M95 95 L100 110 L115 110 L102 120 L107 135 L95 125 L83 135 L88 120 L75 110 L90 110 Z"/>
                        </g>
                    </svg>
                </div>
                <h5 className="name">
                    {t("feature.repair")}
                </h5>
            </div>
            <div className="box active">
                <div className="img-box">
                    <RefreshIcon width={150} height={150} />

                </div>
                <h5 className="name">
                    {t("feature.improve")}
                </h5>
            </div>
            <div className="box">
                <div className="img-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
                        <g fill="none" stroke="yellow" strokeWidth="4">
                            <path d="M75 15 L75 5"/>
                            <path d="M75 140 L75 130"/>
                            <path d="M15 75 L5 75"/>
                            <path d="M140 75 L130 75"/>
                            <path d="M45 45 L30 30"/>
                            <path d="M105 45 L120 30"/>
                            <path d="M45 105 L30 120"/>
                            <path d="M105 105 L120 120"/>

                            <circle cx="75" cy="75" r="25" stroke="gold" strokeWidth="4" fill="yellow"/>
                        </g>
                    </svg>
                </div>
                <h5 className="name">
                    {t("feature.maintain")}
                </h5>
            </div>
        </div>
    </div>
</section>
        </>
    )
}
export default Feature;