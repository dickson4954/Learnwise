import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage(null);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.username || !formData.password || (!isLogin && (!formData.fullName || !formData.email))) {
      return "Please fill in all required fields.";
    }
    if (!isLogin && !/\S+@\S+\.\S+/.test(formData.email)) {
      return "Invalid email address.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const error = validateForm();
    if (error) {
      setMessage({ type: "error", text: error });
      return;
    }

    setLoading(true);

    // Use HTTPS with your domain to avoid mixed content
    const url = isLogin
      ? "https://learnwisee.com:8000/backend/auth/login"
      : "https://learnwisee.com:8000/backend/auth/signup";

    const requestData = isLogin
      ? { username: formData.username, password: formData.password }
      : {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage({ type: "success", text: isLogin ? "Login successful!" : "Registration successful!" });

        if (isLogin) {
          localStorage.setItem("token", result.access_token);
          localStorage.setItem("user", JSON.stringify(result.user));
          setTimeout(() => navigate("/admin"), 1000);
        }
      } else {
        setMessage({ type: "error", text: result.message || "An error occurred. Please try again." });
      }
    } catch (error) {
      setLoading(false);
      setMessage({ type: "error", text: "Failed to connect to the server." });
    }
  };

  return (
    <div className="page-container">
      <div className="login-page">
        <div className="form">
          <form className={isLogin ? "login-form" : "register-form"} onSubmit={handleSubmit}>
            <h2>{isLogin ? "Login" : "Register"}</h2>
            {message && <div className={`message ${message.type}`}>{message.text}</div>}

            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name *"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            )}
            <input
              type="text"
              placeholder={isLogin ? "Username or Email *" : "Username *"}
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            {!isLogin && (
              <input
                type="email"
                placeholder="Email *"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            )}
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password *"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="password-input with-left-toggle"
              />
              <button
                type="button"
                className="password-toggle left-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : isLogin ? "Login" : "Create Account"}
            </button>

            <p className="message">
              {isLogin ? "Not registered? " : "Already registered? "}
              <button type="button" className="toggle-btn" onClick={toggleForm}>
                {isLogin ? "Create an account" : "Sign In"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;