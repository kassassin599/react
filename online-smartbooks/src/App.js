import React, { useState } from "react";
import "./App.css";

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="login-container">
      <form className="login-box">
        {/* User Type Selection */}
        <div className="user-type">
          <input type="radio" id="student" name="user" defaultChecked />
          <label htmlFor="student">Student</label>
          <input type="radio" id="parent" name="user" />
          <label htmlFor="parent">Parent</label>
          <input type="radio" id="staff" name="user" />
          <label htmlFor="staff">Staff</label>
        </div>

        {/* Username Field */}
        <input type="text" placeholder="Username" className="input-field" />

        {/* Password Field */}
        <div className="password-container">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            className="input-field"
          />
          <img
            src="/eye.png"
            alt="Toggle Password"
            className="eye-icon"
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        {/* Buttons */}
        <button type="submit" className="btn">Sign In</button>
        <button type="button" className="btn secondary">Download App</button>

        {/* Register Links */}
        <p className="register-text">
          Not a school? <a href="#">Register</a> | Not a student? <a href="#">Register</a>
        </p>
      </form>
    </div>
  );
}

export default App;
