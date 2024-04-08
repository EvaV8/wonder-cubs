import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const PromoRegister = () => {
    //create navigate object with hook
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate("/signup");
    }
    return ( 
        <div className="promo-register">
            <p>Not yet a member of Wonder Cubs?</p>
            <button className="logSignBtn" id="registerBtn" type='submit' onClick={ handleRegister }>Sign up</button>
        </div>
     );
}
 
export default PromoRegister;