import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contacto</h2>

            <div className="contact-container">

                {/* EMAIL */}
                <motion.div
                    className="contact-card"
                    whileHover={{ scale: 1.05 }}
                >
                    <FaEnvelope className="contact-icon email" />

                    <h3>Email</h3>
                    <p>Contáctanos por correo</p>

                    <a
                        href="mailto:tuemail@gmail.com"
                        className="contact-btn"
                    >
                        Enviar correo
                    </a>
                </motion.div>

                {/* WHATSAPP */}
                <motion.div
                    className="contact-card"
                    whileHover={{ scale: 1.05 }}
                >
                    <FaWhatsapp className="contact-icon whatsapp" />

                    <h3>WhatsApp</h3>
                    <p>Respuesta rápida y directa</p>

                    <a
                        href="https://wa.me/573218762678?text=Hola%20quiero%20información%20sobre%20tus%20servicios"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn"
                    >
                        Escribir ahora
                    </a>
                </motion.div>

                {/* INSTAGRAM */}
                <motion.div
                    className="contact-card"
                    whileHover={{ scale: 1.05 }}
                >
                    <FaInstagram className="contact-icon instagram" />

                    <h3>Instagram</h3>
                    <p>Síguenos en nuestras redes</p>

                    <a
                        href="https://www.instagram.com/tvmaick/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn"
                    >
                        Ir a Instagram
                    </a>
                </motion.div>

            </div>
        </section>
    );
}

export default Contact;