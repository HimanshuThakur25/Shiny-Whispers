import { Instagram } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

export default function Hero() {
    return (
        <section
            className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-cover bg-[80%_center] md:bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-stone-900/50 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <span className="text-brand-caramel font-medium tracking-widest uppercase text-sm mb-6 drop-shadow-md">Handcrafted Excellence</span>
                <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 tracking-tight drop-shadow-lg">
                    Shiny Whispers
                </h1>
                <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-12 opacity-90 font-sans leading-relaxed drop-shadow-md">
                    Bespoke candles elevating your space. Where elegant design provides a canvas for deeply saturated hues.
                </p>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-brand-sapphire text-white px-10 py-5 rounded-full font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:bg-blue-800"
                >
                    <Instagram size={22} />
                    <span className="text-lg">Follow our journey</span>
                </a>
            </div>
        </section>
    );
}
