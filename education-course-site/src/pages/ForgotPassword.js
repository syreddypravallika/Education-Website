import React, { useState } from "react";

function ForgotPassword({ setPage }) {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleReset = () => {
    if (email === "" || newPassword === "") {
      alert("Please enter email and new password");
      return;
    }
    alert("Password reset successful!");
    setPage("login"); // Go back to login
  };

  return (
    <div className="form">
      <h2>Reset Password</h2>

      {/* Back Button */}
      <span
        style={{ cursor: "pointer", color: "blue", display: "block", marginBottom: "15px" }}
        onClick={() => setPage("login")}
      >
        &#8592; Back to Login
      </span>

      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <button className="login-btn" onClick={handleReset}>
        Reset Password
      </button>

      <button
        className="login-btn"
        style={{ marginTop: "10px", backgroundColor: "gray" }}
        onClick={() => setPage("login")}
      >
        Cancel
      </button>
    </div>
  );
}

export default ForgotPassword;


