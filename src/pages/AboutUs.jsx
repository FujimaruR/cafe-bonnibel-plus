import Navbar from '../components/Navbar';
import History from '../components/History';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <History />
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;