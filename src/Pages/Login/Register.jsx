import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [PassError, setPassError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  //console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";
  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    setPassError("");
    const form = event.target;
    const displayName = form.displayName.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const ConfirmPassword = form.ConfirmPassword.value;

    if (password !== ConfirmPassword) {
      setPassError("Password did not match");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPassError("Please add atleast one Upperase");
      return;
    } else if (password.length < 6) {
      setPassError("Please add atleast 6 charecters in your password");
      return;
    }

    console.log(displayName, photo, email, password, ConfirmPassword);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        navigate(from, { replace: true });
        //console.log(createdUser);
        setError("");
        event.target.reset();
        setSuccess("User create successfully");
        updateUserData(result.user , displayName , photo);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const updateUserData = (user, displayName, photo) => {
    updateProfile(user, {
      displayName: displayName,
      photoURL: photo,
    })
      .then(() => {
        //console.log("user updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  const bgimg =
    "https://img.freepik.com/premium-photo/spices-herbs-dark-stone-background_103326-1816.jpg";
  return (
    <div
      className="img-fluid"
      style={{
        backgroundImage: `url(${bgimg})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
       
      }}
    >
      <div  className="row container mx-auto">
      <div className="container text-white col-12 col-md-6 px-0 my-5">
        <div
          style={{ backgroundColor: "#706c6c", opacity: 0.9 }}
          className=" container float-right p-5"
        >
          <h3>Please Register</h3>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="displayName"
                placeholder="Your Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photo"
                placeholder="Photo URL"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <h5 className="text-warning">{PassError}</h5>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="ConfirmPassword"
                placeholder="Confirm Password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                onClick={handleAccepted}
                type="checkbox"
                name="accept"
                label={
                  <h5>
                    Accept <Link to="/terms">Terms and Conditions</Link>{" "}
                  </h5>
                }
              />
            </Form.Group>
            <Button variant="primary" disabled={!accepted} type="submit">
              Register
            </Button>
            <br />
            <h6 className="text-white mt-3">
              Already Have an Account? <Link to="/login">Login</Link>
            </h6>
            <Form.Text className="text-success"></Form.Text>
            <Form.Text className="text-danger"></Form.Text>
          </Form>
          <h5 className="text-warning">{error}</h5>
          <h5 className="text-success">{success}</h5>
        </div>
      </div>
        <div className="col-12 col-md-6 px-0 my-5">
          <img style={{  height: "697px" }} className="img-fluid" src="https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?cs=srgb&dl=pexels-pixabay-262897.jpg&fm=jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
