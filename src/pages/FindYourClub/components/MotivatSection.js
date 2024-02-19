import match_img from '../images/football_match.jpg';
import '../styles/FindYourClub.css';

const MotivSection = () => {
    return ( 
        <div className="motivational-container">
            <div className="motiv-image">
                <img src={ match_img } alt="Women playing football" />
            </div>
            <div className="motiv-text">
                <p>Do you dream of being a football <span id="yellow-text">star</span>?</p>
                <p>Ready to make new <span id="yellow-text">friends</span> and have a good time?</p>
                <p>Join a club and discover the <span id="yellow-text">joy</span> of football!</p>
            </div>
        </div>
     );
}
 
export default MotivSection;