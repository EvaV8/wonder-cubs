import '../styles/Login.css';
import { Link } from 'react-router-dom';

const LoginIncorrect = () => {
    return ( 
        <div className="main-window">
            <h1 className='page-title'>Unsuccessful Log in</h1>
            <div className='form other'>
                <h3>Incorrect details, please try again</h3>
                <h3>Click below to go back to the log in page</h3>
                <Link to="/login">
                    <button className="logSignBtn">Back to Log In</button>
                </Link>              
            </div>
        </div>
    );
}
 
export default LoginIncorrect;