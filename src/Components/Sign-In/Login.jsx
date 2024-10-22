import { useState } from "react";
import "./Login.css";
import useRegistration from '../../Hooks/useRegistration';


function Register() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const {email,setEmail, name, setName,password, setPassword, handleSubmit} = useRegistration();

  function handleLogin(e) {
      e.preventDefault();

      // Check if the fields are empty
      if (!email || !password) {
          alert('Please enter both email and password.');
          return;
      }

      const storedUser = JSON.parse(localStorage.getItem('user'));

      // Check if user exists in local storage
      if (storedUser) {
          if (storedUser.email === email && storedUser.password === password) {
              alert('Logged In Successfully');
          } else {
              alert('Invalid credentials. Please try again.');
          }
      } else {
          alert('No user found. Please register first.');
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
              <input type="text" className="input" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
              <input type="email" className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              <input type="password" className="input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
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
                <input type="email" className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" className="input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
              </div>
              <button className="Login-btn" onClick={handleLogin}>Log in</button>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default Register;
