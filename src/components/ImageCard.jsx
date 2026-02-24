import { motion } from 'framer-motion';

export default function ImageCard({ candle }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group overflow-hidden rounded-xl bg-white transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl"
        >
            <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                <img
                    src={candle.imageUrl}
                    alt={candle.altText}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />
                <div className="absolute inset-0 hidden flex-col items-center justify-center bg-brand-wax p-6 text-center border-b border-gray-100">
                    <span className="text-xl font-serif text-brand-sapphire mb-2 max-w-full truncate px-4">{candle.title}</span>
                    <span className="text-sm text-brand-wick opacity-60">Image Unavailable</span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="font-serif text-2xl font-medium text-brand-wick mb-3">{candle.title}</h3>
                <div className="flex flex-wrap gap-2">
                    {candle.tags.map(tag => (
                        <span key={tag} className="text-xs px-3 py-1 bg-brand-wax text-brand-caramel rounded-full tracking-wide">
                            {tag.toUpperCase()}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
