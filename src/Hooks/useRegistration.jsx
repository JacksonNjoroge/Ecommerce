import { useState } from "react";
import { toast,  Bounce  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useRegistration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //toatify
    const emptyFormAlert = () =>
        toast.error('Please fill in all fields!🤦‍♂️', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
    });

    const userAlreadyExist = () =>{
        toast('😒User already exists. Login instead.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }

    const registrationSuccessful = () =>{
        toast.success('🚀Registration successful', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if fields are filled
        if (!name || !email || !password) {
            emptyFormAlert();
            return;
        }

        // Check if the user already exists
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email) {
            userAlreadyExist()
            return;
        }

        // Create a new user object
        const user = { name, email, password };

        // Store the user in localStorage
        localStorage.setItem("user", JSON.stringify(user));
        registrationSuccessful();
        
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