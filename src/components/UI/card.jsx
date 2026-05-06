function Card({ title, description, icon, onClick, isActive }) {
    return (
        <div
            className={`card ${isActive ? "active" : ""}`}
            onClick={(e) => {
                e.stopPropagation(); // evita conflictos de eventos
                onClick && onClick();
            }}
            style={{ cursor: "pointer" }}
        >
            <div className="card-icon">{icon}</div>

            <h3>{title}</h3>

            <div className="card-line"></div>

            <p>{description}</p>
        </div>
    );
}

export default Card;