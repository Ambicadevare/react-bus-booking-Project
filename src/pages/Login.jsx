import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const login = () => {
        localStorage.setItem("user", name);
        navigate("/");
    };

    return (
        <div style={{ padding: "40px" }}>
            <h2>Login</h2>
            <input placeholder="Enter name" onChange={e => setName(e.target.value)} />
            <br /><br />
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;
