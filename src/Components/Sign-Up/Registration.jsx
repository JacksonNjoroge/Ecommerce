import useRegistration from '../../Hooks/useRegistration';
import './Registration.css'


function Registration() {
    const {email,setEmail, name, setName,password, setPassword, handleSubmit} = useRegistration();

    return (
        <div className="registration-form">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className="input-box">
                    <label>Name:</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <label>Password:</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Registration;
