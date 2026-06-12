import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {

    if (
      username === "admin" &&
      password === "admin123"
    ) {
      localStorage.setItem("admin", "true");

      navigate("/admin");
    }
    else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Admin Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;