import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Button } from "react-bootstrap";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
    const[user, setUser]= useState(null);
    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();
    const GitProvider = new GithubAuthProvider();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  //console.log("login page location", location);
  const from = location.state?.from?.pathname || "/home";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        //console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
const handleGoogle =(event)=> {
    event.preventDefault();
    signInWithPopup(auth, GoogleProvider)
  .then((result) => {
    const logUser= result.user;
    console.log(logUser);
    setUser(logUser)
  })
  .catch(error=> {
    console.log('error', error.message);
  })

}

const handleGit =(event)=> {
    event.preventDefault();
    signInWithPopup(auth, GitProvider)
  .then((result) => {
    const logeduser= result.user;
    console.log(logeduser);
    setUser(logeduser)
  })
  .catch(error=> {
    console.log('error', error.message);
  })

}


  const bgimg =
    "https://as1.ftcdn.net/v2/jpg/03/46/14/28/1000_F_346142850_fnv89mnTesyNU3t8zbbMc5yYtN9whSOC.jpg";
  return (
    <div
      className="img-fluid "
      style={{
        backgroundImage: `url(${bgimg})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "700px",
        weight:"",
      }}
    >
      please login
      <div className="container text-white">
        <div className="w-50 mx-auto m-5 p-5">
          <h2 className="text-white pt-5">Please Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                // ref={emailRef}
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label
                className="form-check-label text-white"
                htmlFor="rememberMe"
              >
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>

          </form>
          <p>
            <small className="text-white">
              Forget Password? Please{" "}
              <button
                // onClick={handleResetPassword}
                className="btn btn-link"
              >
                Reset Password
              </button>
            </small>
          </p>
          <div className="mb-4">
          <Button onClick={handleGoogle} className='mx-3' variant="primary"> <FaGoogle /> Login with Google</Button>
            <Button onClick={handleGit} variant="secondary"> <FaGithub></FaGithub> Login with Github</Button>
          </div>
          <p
             className="text-white">
              New to this website? Please <Link to="/register">Register</Link>
            
          </p>
          {/* <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
