import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      navigate("/admin");
    } else {
      alert("Нууц үг эсвэл хэрэглэгч буруу байна");
    }
  };

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h2>Login Page</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br /><br />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
