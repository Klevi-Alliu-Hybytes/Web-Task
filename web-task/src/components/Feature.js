import { useTranslation } from 'react-i18next';
import { ReactComponent as RefreshIcon } from "../assets/images/refresh.svg";  // Import the SVG as a React component
import { ReactComponent as SparkleIcon } from "../assets/images/sparkle.svg";  // Import the SVG as a React component

const Feature = () => {
    const { t } = useTranslation(); // Access the translation function

    return (
        <>
<section className="feature_section">
    <div className="container">
        <div className="feature_container">
            <div className="box">
                <div className="img-box">
                    <SparkleIcon width={150} height={150} />
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