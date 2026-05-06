import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Contact />
        </>
    );
}

export default Home;