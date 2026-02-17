function History() {
    const history = JSON.parse(localStorage.getItem("history")) || [];

    return (
        <div style={{ padding: "20px" }}>
            <h2>Booking History</h2>

            {history.length === 0 && <p>No bookings</p>}

            {history.map((h, i) => (
                <div key={i} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
                    <p>Bus: {h.busId}</p>
                    <p>Seats: {h.seats?.join(", ")}</p>
                    <p>Date: {h.date}</p>
                </div>
            ))}
        </div>
    )
}
export default History;
