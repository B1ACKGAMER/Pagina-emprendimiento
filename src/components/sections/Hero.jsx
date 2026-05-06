import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const phrases = [
    "Soporte técnico",
    "Reparación profesional",
    "Reparación a consolas de videjuegos",
    "Desarrollo web",
];

function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Soluciones Tecnológicas
            </motion.h1>

            <p className="hero-subtitle">
                Impulsamos el rendimiento con nuestros productos
            </p>

            {/* TEXTO DINÁMICO */}
            <div className="dynamic-text">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={phrases[index]}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {phrases[index]}
                    </motion.span>
                </AnimatePresence>
            </div>

        </section>
    );
}

export default Hero;