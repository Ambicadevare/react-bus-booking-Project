import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Seats() {
    const { id } = useParams();
    const navigate = useNavigate();

    const price = 500; // price per seat
    const bookedSeats = [3, 7, 12, 18]; // already booked

    const [selected, setSelected] = useState([]);

    const seats = Array.from({ length: 24 }, (_, i) => i + 1);

    const toggleSeat = (seat) => {
        if (bookedSeats.includes(seat)) return;

        if (selected.includes(seat))
            setSelected(selected.filter((s) => s !== seat));
        else
            setSelected([...selected, seat]);
    };

    const total = selected.length * price;

    const bookSeats = () => {
        if (selected.length === 0) {
            alert("Please select seats");
            return;
        }

        localStorage.setItem(
            "booking",
            JSON.stringify({
                busId: id,
                seats: selected,
                total
            })
        );

        navigate("/payment");
    };

    return (
        <div style={{ padding: "30px" }}>
            <h2>🚌 Select Seats (Bus #{id})</h2>

            {/* Driver */}
            <div style={{ marginBottom: "15px", fontWeight: "bold" }}>
                🧑‍✈️ Driver
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 60px)",
                    gap: "10px",
                }}
            >
                {seats.map((seat, index) => (
                    <div key={seat} style={{ display: "contents" }}>
                        {(index % 4 === 2) && <div></div>}

                        <div
                            onClick={() => toggleSeat(seat)}
                            style={{
                                width: "60px",
                                height: "60px",
                                background: bookedSeats.includes(seat)
                                    ? "#e74c3c"
                                    : selected.includes(seat)
                                        ? "#2ecc71"
                                        : "#dcdcdc",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: bookedSeats.includes(seat) ? "not-allowed" : "pointer",
                                color: bookedSeats.includes(seat) ? "white" : "black",
                                fontWeight: "bold",
                            }}
                        >
                            {seat}
                        </div>
                    </div>
                ))}
            </div>

            <p style={{ marginTop: "20px" }}>
                <b>Selected Seats:</b> {selected.join(", ") || "None"}
            </p>

            <h3>Total: ₹{total}</h3>

            <button
                onClick={bookSeats}
                style={{
                    marginTop: "15px",
                    padding: "10px 18px",
                    background: "#3498db",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                }}
            >
                Proceed to Payment
            </button>
        </div>
    );
}

export default Seats;
