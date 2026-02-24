import { Instagram } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-brand-wax">
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <span className="text-brand-caramel font-medium tracking-widest uppercase text-sm mb-6">Handcrafted Excellence</span>
                <h1 className="text-6xl md:text-8xl font-serif text-brand-wick mb-8 tracking-tight">
                    Shiny Whispers
                </h1>
                <p className="text-xl md:text-2xl text-brand-wick max-w-2xl mx-auto mb-12 opacity-80 font-sans leading-relaxed">
                    Bespoke candles elevating your space. Where elegant design provides a canvas for deeply saturated hues.
                </p>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-brand-sapphire text-white px-10 py-5 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-soft hover:bg-blue-800"
                >
                    <Instagram size={22} />
                    <span className="text-lg">Follow our journey</span>
                </a>
            </div>
        </section>
    );
}
