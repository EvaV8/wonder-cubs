// Type in terminal for the database:
//npx json-server --watch data_users/usersdb.json --port 8010

import '../styles/Login.css';
import { useState, useEffect } from 'react';


const Signup = () => {
    // user inserted details
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Validation message
    const emailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const [messageErr, setMessageErr] = useState('');
    const [messageReg, setmessageReg] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const existsUser = users.find(user => (user.email === email))
        const newUser ={ email, password }
        if(!email.match(emailFormat)) {
            setMessageErr("Incorrect email format. Please try again")
        }
        else if(existsUser) {
            setMessageErr("User already exists")
        }
        else {
            fetch("http://localhost:8010/users", {
                method:'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            }).then(()=>{
                console.log("New User added")
                setmessageReg("Successful registration to Wonder Cubs!")
                setMessageErr("")
            })
        }
    }

    return ( 
        <>
            <div className="main-window">
                <h1 className='page-title'>Register here</h1>
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
                    <p id="error-msg">{ messageErr }</p>
                    <p id="register-msg">{ messageReg }</p>
                    <button className="logSignBtn" type="submit">Sign up</button>
                </form>
            </div>
        </>
     );
}
 
export default Signup;