import './LoginPage.css'
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [message, setMessage] = useState('');

    const handleuser = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post('http://localhost:5000/login', {username, password});
            localStorage.setItem('token', res.data.token);
            setMessage("login successful");
            navigate("/login/judge/addcases")
        }
        catch(err){
            setMessage("invalid credentials");
        }
    
    };
    return(
        <>
        <div className="bosk">
            <h2 >LOGIN {message}</h2>
            <div className="uname">
                <label>username</label>
                <input onChange={(e) => setusername(e.target.value)}
                    type="text"
                    value={username}
                    required
                />
            </div>
            <div className="pw">
                <label>password</label>
                <input onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    value={password}
                    required
                />
            </div>
            <button type="button" onClick={handleuser}>Login</button>
        </div>
        </>
    );
};

export default Login;