import { useState } from "react";

function useRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();

      // Check if fields are filled
      if (!name || !email || !password) {
          alert('Please fill all the fields');
          return;
      }

      // Check if the user already exists
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === email) {
          alert('User with this email already exists. Please use a different email.');
          return;
      }

      // Create a new user object
      const user = { name, email, password };

      // Store the user in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      alert("Registration successful");
      
      // Clear input fields after registration
      setName('');
      setEmail('');
      setPassword('');
  }
  return {
      name,
      setName,
      email,
      setEmail,
      password,
      setPassword,
      handleSubmit,

  }
}

export default useRegistration