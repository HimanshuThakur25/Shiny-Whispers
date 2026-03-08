import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProductModal({ candle, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Reset index when candle changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [candle]);

    if (!candle) return null;

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % candle.galleryImages.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + candle.galleryImages.length) % candle.galleryImages.length);
    };

    const handleContentClick = (e) => {
        e.stopPropagation(); // Prevent clicks inside modal from closing it
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/90 overflow-y-auto"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative w-full max-w-5xl bg-brand-wax rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                    onClick={handleContentClick}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-stone-800 rounded-full shadow-sm transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>

                    {/* Left: Image Gallery */}
                    <div className="w-full md:w-1/2 relative bg-gray-100 flex items-center justify-center group overflow-hidden h-[40vh] flex-shrink-0 md:h-auto md:min-h-[500px]">
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                key={currentImageIndex}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                src={candle.galleryImages[currentImageIndex]}
                                alt={`${candle.title} view ${currentImageIndex + 1}`}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Carousel Navigation */}
                        {candle.galleryImages.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 p-2 bg-white/70 hover:bg-white text-stone-800 rounded-full shadow-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all transform -translate-y-1/2 top-1/2"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 p-2 bg-white/70 hover:bg-white text-stone-800 rounded-full shadow-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all transform -translate-y-1/2 top-1/2"
                                >
                                    <ChevronRight size={24} />
                                </button>

                                {/* Dots indicator */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                    {candle.galleryImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                                            aria-label={`Go to image ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Right: Product Details */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                        <h2 className="text-4xl lg:text-5xl font-serif text-brand-wick mb-4">{candle.title}</h2>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {candle.tags.map(tag => (
                                <span key={tag} className="text-xs px-3 py-1 bg-white border border-stone-200 text-brand-caramel rounded-full tracking-wide">
                                    {tag.toUpperCase()}
                                </span>
                            ))}
                        </div>

                        <div className="prose prose-stone prose-lg text-stone-600 leading-relaxed font-sans border-t border-stone-200 pt-6">
                            <p>{candle.description}</p>
                        </div>

                        <div className="mt-10">
                            <button className="w-full sm:w-auto bg-brand-sapphire text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-blue-800 tracking-wide">
                                Inquire About Customization
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
