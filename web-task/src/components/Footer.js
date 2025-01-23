import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation(); // Access the translation function

    return (
        <>
            <footer className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayDateYear"></span> {t('footer.allRightsReserved')}
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
