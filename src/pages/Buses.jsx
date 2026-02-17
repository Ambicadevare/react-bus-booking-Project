import { useLocation, useNavigate } from "react-router-dom";
import { buses } from "../data/buses";

function Buses() {
    const location = useLocation();
    const navigate = useNavigate();

    // safely read values
    const from = location.state?.from ? location.state.from : "";
    const to = location.state?.to ? location.state.to : "";

    // filter buses
    const filtered = buses.filter((b) => {
        return (
            b.from.toLowerCase().trim() === from.toLowerCase().trim() &&
            b.to.toLowerCase().trim() === to.toLowerCase().trim()
        );
    });

    return (
        <div style={{ padding: "30px" }}>
            <h2 style={{ marginBottom: "20px" }}>Available Buses</h2>

            {filtered.length === 0 && <p>No buses found</p>}

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {filtered.map((bus) => (
                    <div
                        key={bus.id}
                        style={{
                            border: "1px solid #ddd",
                            margin: "15px",
                            padding: "15px",
                            borderRadius: "12px",
                            background: "#ffffff",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            width: "280px"
                        }}
                    >
                        <h3 style={{ margin: "0 0 10px 0" }}>{bus.name}</h3>

                        <p>
                            <b>{bus.from}</b> → <b>{bus.to}</b>
                        </p>

                        <p>🕒 Time: {bus.time}</p>

                        <div style={{ marginTop: "12px" }}>
                            <button
                                style={{
                                    background: "#2ecc71",
                                    color: "white",
                                    border: "none",
                                    padding: "8px 12px",
                                    borderRadius: "6px",
                                    cursor: "pointer"
                                }}
                                onClick={() => navigate(`/track/${bus.id}`)}
                            >
                                Track
                            </button>

                            <button
                                style={{
                                    background: "#3498db",
                                    color: "white",
                                    border: "none",
                                    padding: "8px 12px",
                                    borderRadius: "6px",
                                    marginLeft: "10px",
                                    cursor: "pointer"
                                }}
                                onClick={() => navigate(`/seats/${bus.id}`)}
                            >
                                Book Seats
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Buses;
