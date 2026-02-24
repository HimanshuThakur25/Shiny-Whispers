import { candlesData } from '../data/candlesData';
import ImageCard from './ImageCard';

export default function VisualGallery() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto bg-brand-wax">
            <div className="mb-16 text-center text-brand-wick max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Signature Collection</h2>
                <p className="text-lg opacity-80 leading-relaxed">
                    Discover our handcrafted creations with carefully formulated scents and deeply saturated colors. Each candle is a unique piece of art.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
                {candlesData.map(candle => (
                    <ImageCard key={candle.id} candle={candle} />
                ))}
            </div>
        </section>
    );
}
