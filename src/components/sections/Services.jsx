import { useState } from "react";
import {
    FaLaptopCode,
    FaTools,
    FaGamepad,
    FaGlobe
} from "react-icons/fa";

import Card from "../UI/card";

const services = [
    {
        id: "soporte",
        title: "Soporte Técnico",
        icon: <FaLaptopCode />,
        description: "Solución de problemas y mantenimiento de equipos",
        details: [
            "Diagnóstico general",
            "Formateo e instalación de sistema operativo",
            "Optimización de rendimiento",
            "Limpieza interna y mantenimiento",
        ],
    },
    {
        id: "reparacion",
        title: "Reparación",
        icon: <FaTools />,
        description: "Reparación de hardware y software",
        details: [
            "Cambio de discos duros o SSD",
            "Reparación de fallas de encendido",
            "Cambio de piezas dañadas",
            "Actualización de componentes",
        ],
    },
    {
        id: "consolas",
        title: "Consolas",
        icon: <FaGamepad />,
        description: "Mantenimiento y reparación de consolas",
        details: [
            "Limpieza interna",
            "Cambio de pasta térmica",
            "Reparación de controles",
            "Solución de sobrecalentamiento",
        ],
    },
    {
        id: "web",
        title: "Desarrollo Web",
        icon: <FaGlobe />,
        description: "Creación de páginas modernas",
        details: [
            "Diseño de páginas web",
            "Landing pages profesionales",
            "Optimización de rendimiento",
            "Implementación de formularios",
        ],
    },
];

function Services() {
    const [activeService, setActiveService] = useState(null);

    return (
        <section id="services" className="services">
            <h2>Servicios</h2>

            <div className="grid">
                {services.map((s) => (
                    <Card
                        key={s.id}
                        {...s}
                        onClick={() =>
                            setActiveService(
                                activeService?.id === s.id ? null : s // 👈 toggle + objeto completo
                            )
                        }
                    />
                ))}
            </div>

            {/* DETALLE */}
            {activeService && (
                <div className="service-detail">
                    <h3>{activeService.title}</h3>
                    <p>{activeService.description}</p>

                    <ul>
                        {activeService.details.map((item, i) => (
                            <li key={i}>✔ {item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}

export default Services;