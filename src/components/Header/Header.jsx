import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
    .then(() => {})
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order Review</Link>
        <Link to="/inventory">Inventory</Link>
        {
          user ? <span className="user-info">Welcome, {user.email} <button onClick={handleSignOut} className="btn-sign-out">Sign Out</button></span>
          : <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          </>
        }
        <div>

        </div>
      </div>
    </nav>
  );
};

export default Header;
