import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAPI } from "../store/auth/auth.actions";

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAPI(loginCreds));
  };

  useEffect(() => {
    if (isAuth) {
      navigate(location.state.pathname || "/", { replace: true });
    }
  }, [navigate, isAuth]);


  return (
    <div>
      <form className='formDiv' onSubmit={handleSubmit}>
      <h2>Login</h2>
        <div className="row mb-3">
          <div className="col-sm-10">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <input
              name="email"
              placeholder="Enter Email"
              value={loginCreds.email}
              onChange={hanldeChange} type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10">
            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <input
              name="password"
              placeholder="Enter Password..."
              value={loginCreds.password}
              onChange={hanldeChange} type="password" className="form-control" id="inputPassword3" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
    </div>

  );
};

export default Login;
