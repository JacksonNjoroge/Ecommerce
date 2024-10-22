import { useState } from "react";
import "./Login.css";
import useRegistration from '../../Hooks/useRegistration';
import { ToastContainer, toast, Slide, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const { email, setEmail, name, setName, password, setPassword, handleSubmit } = useRegistration();

  // Toastify alerts
  const emptyFormAlert = () =>
    toast.error('Please fill in all fields!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });

  const LoginSuccessful = () => {
    toast.success('🌟 Login Successful', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Slide,
    });
  };

  const invalidCredentials = () => {
    toast.warn('Invalid credentials. Please try again.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Slide,
    });
  };

  const noUserFound = () => {
    toast.info('No user found. Please register first.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Slide,
    });
  };

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      emptyFormAlert();
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser || email !== storedUser.email) {
      noUserFound();
      return;
    }

    if (storedUser.password === password) {
      LoginSuccessful();
    } else {
      invalidCredentials();
    }
  }

  const handleToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <>
      <div className="formContainer">
        <div className="form-structor">
          <div className={`signup ${isLoginVisible ? "slide-up" : ""}`}>
            <h2 className="form-title" id="signup" onClick={handleToggle}>
              Sign up
            </h2>
            <div className="form-holder">
              <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="submit-btn" onClick={handleSubmit}>
              Sign up
            </button>
          </div>

          <div className={`login ${isLoginVisible ? "" : "slide-up"}`}>
            <div className="center">
              <h2 className="form-title" id="login" onClick={handleToggle}>
                Log in
              </h2>
              <div className="form-holder">
                <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button className="login-btn" onClick={handleLogin}>Log in</button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Register;
