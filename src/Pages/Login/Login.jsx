import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            please login
            <div>
            <div className='w-25 mx-auto'>
            <h2>Please Login</h2>
            <form 
            //onSubmit={handleLogin}
            >
                <div className="form-group mb-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name='email' 
                    // ref={emailRef}
                     className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' className="form-control" id="password" placeholder="Password" required />
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p><small>Forget Password? Please <button 
            // onClick={handleResetPassword}
             className='btn btn-link'>Reset Password</button></small></p>
            <p><small>New to this website? Please <Link to="/register">Register</Link></small></p>
            {/* <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p> */}
        </div>
            </div>
        </div>
    );
};

export default Login;