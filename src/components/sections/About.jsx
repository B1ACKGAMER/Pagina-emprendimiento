import { FaFire, FaRocket, FaLock } from "react-icons/fa";

function About() {
    return (
        <section id="about" className="about">
            <h2 className="about-title">Sobre MAICK</h2>

            <p className="about-text">
                En MAICK creemos en hacer las cosas bien desde el primer momento.
                Somos una marca en crecimiento con visión profesional, enfocada en
                brindar soluciones tecnológicas confiables y generar confianza en
                cada cliente.
            </p>

            <div className="about-grid">
                <div className="about-card">
                    <FaFire className="about-icon" />
                    <h3>Pasión por la calidad</h3>
                    <p>
                        Nos apasiona entregar resultados bien hechos, cuidando cada detalle
                        en cada servicio.
                    </p>
                </div>

                <div className="about-card">
                    <FaRocket className="about-icon" />
                    <h3>Crecimiento constante</h3>
                    <p>
                        Aunque somos nuevos, trabajamos con disciplina para posicionarnos
                        en el mercado y crecer junto a nuestros clientes.
                    </p>
                </div>

                <div className="about-card">
                    <FaLock className="about-icon" />
                    <h3>Confianza y seguridad</h3>
                    <p>
                        Garantizamos confidencialidad, responsabilidad y seguridad en cada
                        proceso.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;