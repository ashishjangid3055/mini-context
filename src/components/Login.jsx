import React, { useState, useContext } from 'react'
import UserContext from '../context/userContext';
const Login = () => {
    const { setUser } = useContext(UserContext);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ userName, password });
    }
    return (
        <>
            <h2>Login</h2>
            <input
                type="text"
                placeholder='username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            {" "}
            <input
                type="text"
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login