import { useState, useEffect } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");

    // Detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ["services", "about", "contact"];
            let current = "";

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const top = section.offsetTop - 100;
                    if (window.scrollY >= top) {
                        current = id;
                    }
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

            {/* LOGO */}
            <div className="logo-container">
                <img src="/Logo.jpg" alt="logo" className="logo-img" />
            </div>

            {/* LINKS */}
            <div className="nav-links">
                <a href="#services" className={active === "services" ? "active" : ""}>
                    Servicios
                </a>
                <a href="#about" className={active === "about" ? "active" : ""}>
                    Sobre
                </a>
                <a href="#contact" className={active === "contact" ? "active" : ""}>
                    Contacto
                </a>
            </div>

            {/* HAMBURGUESA */}
            <div className="menu-toggle" onClick={() => setOpen(!open)}>
                <span className={open ? "line open" : "line"}></span>
                <span className={open ? "line open" : "line"}></span>
                <span className={open ? "line open" : "line"}></span>
            </div>

            {/* MENU MOBILE */}
            {open && (
                <div className="mobile-menu">
                    <a href="#services" onClick={() => setOpen(false)}>Servicios</a>
                    <a href="#about" onClick={() => setOpen(false)}>Sobre</a>
                    <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;