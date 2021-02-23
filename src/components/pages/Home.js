import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Offer from '../Offer';
import Works from '../Works';
import Warranty from '../Warranty';
import Foot from '../Foot';

function Home() {
    return (
        <>
            <HeroSection />
            <Offer />
            <Cards />
            <Works />
            <Warranty />
            <Foot />
        </>
    );
}

export default Home;