import { useNavigate } from "react-router-dom";

function Payment() {
    const navigate = useNavigate();

    const pay = () => {
        const booking = JSON.parse(localStorage.getItem("booking"));

        const history = JSON.parse(localStorage.getItem("history")) || [];
        history.push({ ...booking, date: new Date().toLocaleString() });
        localStorage.setItem("history", JSON.stringify(history));

        alert("Payment Success");
        navigate("/history");
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Payment</h2>
            <button onClick={pay}>Pay Now</button>
        </div>
    )
}
export default Payment;
