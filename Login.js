import React, { useState } from "react";

function Login({ onLogin, setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }
    alert("Login Successful");
    onLogin();
  };

  return (
    <div className="form">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="login-row">
        <div className="remember-group">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          <span>remember me</span>
        </div>

        {/* Updated: forgot password navigates to reset page */}
        <span
          className="forgot"
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => setPage("forgot")}
        >
          forgot password
        </span>
      </div>

      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;









