import Slider from "../components/Slider";
import About from "../components/About";
import Professional from "../components/Professional";
import Feature from "../components/Feature";
import Service from "../components/Service";
import Client from "../components/Client";
import Contact from "../components/Contact";
import Info from "../components/Info";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
        <Slider />
        <Feature />
        <About />
        <Professional />
        <Service />
        <Client />
        <Contact />
        <Info />
        <Footer />
        </>
    );
};

export default HomePage;