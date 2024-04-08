import '../styles/Login.css';
import girl_img from '../images/girl_ball.jpg';
// import girl2_img from './images/girl2_ball.jpg';
// import goalkeeper_img from './images/goalkeeper.jpg';
// import mixed_football_img from './images/mixed_football.jpg';

import { Link } from 'react-router-dom';

const LoginCorrect = () => {
    return (   
        <div className="main-window">
            <h1 className='page-title'>Welcome to Wonder Cubs! </h1>
            <div className='form other'>
                <img src={ girl_img } alt="a girl with a ball"></img>
                <Link to="/login">
                    <button className="logSignBtn">Sign Out</button>
                </Link>
            </div>
        </div>
    );
}
 
export default LoginCorrect;