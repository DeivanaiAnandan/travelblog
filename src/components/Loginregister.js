import React from "react";
import { Link } from "react-router-dom";

const Loginregister = () => {
  return (
    <div className="login-register-container ">
      <h2 style={{ marginBottom: "20px" }}>Login or Register</h2>
      {/* Your login and register forms go here */}
      <Link to="/loginform">
        <button className="btn btn-primary ">Login</button>
      </Link>
      <Link to="/registrationform">
        <button className="btn btn-primary mt-4">Register</button>
      </Link>
    </div>
  );
};

export default Loginregister;
