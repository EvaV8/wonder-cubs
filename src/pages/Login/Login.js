// Type in terminal for the database:
//npx json-server --watch data_users/usersdb.json --port 8010

import './styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PromoRegister from './components/PromoRegister';

const Login = () => {     
    // user inserted details
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Validation message
    const emailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const [message, setMessage] = useState('');

    //API users
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8010/users")
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setUsers(data);
            })
    }, [email])

    //create navigate object with hook
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const existsUser = users.find(user => (user.email === email && user.password === password))
        
        if(!email.match(emailFormat)) {
            setMessage("Incorrect email format. Please try again")
        }
        else if(existsUser) {
            navigate("/login/correct")
        }     
        else {
            navigate("/login/incorrect")
        }
    }

    return ( 
        <>
            <div className="main-window">
                <h1 className='page-title'>Log in</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <label>Email address</label>
                    <input
                        type="text"
                        required
                        value = { email }
                        onChange={ e => setEmail(e.target.value) }
                    />
                    <label>Password</label>
                    <input
                        type="text"
                        required
                        value = { password }
                        onChange={ e => setPassword(e.target.value) }
                    />
                    <p id="error-msg">{ message }</p>
                    <button className="logSignBtn" type="submit">Log In</button>
                </form>
            </div>
            <PromoRegister />
        </>
    );
}
 
export default Login;