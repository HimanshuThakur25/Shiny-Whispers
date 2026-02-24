import Hero from './Hero';
import VisualGallery from './VisualGallery';
import Footer from './Footer';

function App() {
    return (
        <div className="min-h-screen font-sans bg-brand-wax text-brand-wick selection:bg-brand-caramel selection:text-white flex flex-col transition-colors duration-300">
            <main className="flex-grow">
                <Hero />
                <VisualGallery />
            </main>
            <Footer />
        </div>
    );
}

export default App;
