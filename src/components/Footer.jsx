import { Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-wick text-brand-wax py-16 px-6 md:px-12 border-t border-brand-wick/10">
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <div className="font-serif text-3xl tracking-wide mb-2">
                        Shiny Whispers
                    </div>
                    <p className="text-brand-wax/60 text-sm">© {new Date().getFullYear()} Shiny Whispers. All rights reserved.</p>
                </div>

                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-wax/5 rounded-full text-brand-wax hover:text-brand-caramel hover:bg-brand-wax/10 transition-all duration-300"
                >
                    <Instagram size={24} />
                    <span className="sr-only">Instagram</span>
                </a>
            </div>
        </footer>
    );
}
