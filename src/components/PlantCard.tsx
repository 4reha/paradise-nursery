import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/path/to/image.jpg)",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <h2>Welcome to Paradise Nursery</h2>
      <p>Your one-stop shop for beautiful houseplants.</p>
      <button onClick={() => (window.location.href = "/products")}>
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
