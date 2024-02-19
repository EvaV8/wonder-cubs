import './TeamIntro.css'
import ButtonDee from './dee/ButtonDee';
import snorkel from '../team_intro/images/snorkel.png';
import sun from './images/sun.png';
import tree from './images/tree.png';
import yoga from './images/meditation.png';
import netball from './images/netball.png';
import hoop from './images/hoop.png';
import camera from './images/camera.png';
import fighting_stress from "./images/fighting_stress.png";

const TeamIntro = () => {
  return (
    <div className="team_intro">
      <h1>Team Introduction</h1>
      {/* Insert here everyone's details for Homework#2*/}
      <div className="intro_person">
        <p>
          <span className="team_member">Celina</span>
        </p>
        <li>I enjoy taking photos {camera} and retouching them in Photoshop</li>
        <li>I do it as a stress coping mechanism {figthing_stress} because it keeps me focused and entertained at the same time</li>
      </div>

      <div className="intro_person">
          <p><span className='team_member'>Dee</span></p>
          <ButtonDee />
      </div>

      <div className="intro_person">
        <p>
          <span className="team_member">Eva</span>
        </p>
        <li>
          My favourite hobby is swimming.
          <img src={snorkel} alt="snorkel logo"/> Unfortunately, I only swim during my summer holidays
          <img src={sun} alt="sun logo"/>
        </li>
        <li>I love everyhting about the sea and being in the water makes me happy</li>
      </div>

      <div className="intro_person">
        <p>
          <span className="team_member">Sazia</span>
        </p>
        <li>My favourite downtime time would be gardening
          <img src={tree} alt="tree logo" />or doing yoga.<img src={yoga} alt="yoga logo"/>
        </li>
        <li>
          I love looking after my plants because it brings me joy and yoga keeps
          me healthy.
        </li>
      </div>

      <div className="intro_person">
        <p>
          <span className="team_member">Steph</span>
        </p>
        <li>My favourite hobby is to play netball
          <img src={netball} alt="netball logo"/>
          <img src={hoop} alt="hoop logo"/>
        </li>
        <li>
          I enjoy it, as it's a way to meet new people, to be part of a team and
          to keep fit.
        </li>
      </div>
    </div>
  );
};

export default TeamIntro;
