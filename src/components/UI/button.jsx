import { motion } from "framer-motion";

function Button({ text, onClick, href }) {
    const content = (
        <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {text}
        </motion.span>
    );

    if (href) {
        return (
            <a href={href} target="_blank" className="btn">
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className="btn">
            {content}
        </button>
    );
}

export default Button;