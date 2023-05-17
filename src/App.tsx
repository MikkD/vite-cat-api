import './App.css';
import Header from './modules/home/Header';
import Hero from './modules/home/Hero';
import Pricing from './modules/home/Pricing';
import Footer from './modules/home/Footer';

function App() {
    return (
        <>
            <div className='flex-content'>
                <Header />
                <Hero />
                <Pricing />
            </div>
            <Footer />
        </>
    );
}

export default App;
