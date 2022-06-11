import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAPI } from "../store/auth/auth.actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const handleLoginClick = () => {
    dispatch(logoutAPI());
  };

  return (

    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">TODO'S</Link>
          <form className="d-flex">
            <button className="btn btn-outline-success" type="button" onClick={handleLoginClick}>{isAuth ? "Logout" : "Login"}</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
