import 'bootstrap/dist/css/bootstrap.min.css';
import Aus from '../Images/australia.png'
import Denmark from '../Images/denmark.png';
import Haiti from '../Images/haiti.png';
import England from '../Images/EnglLatest.png';
import '../Styles/Fixtures.css';

//Component to show the current fixtures of the England Women's football team
//Steph Williams 26.05
//Bootstrap used for cards
//Data hard coded

const Fixtures = () => {
  try {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4" data-testid="fixtures">
        <div className="col">
          <div className="card h-100">
            <div className="image-containter">
              <img src={England} className="card-img-top" alt="englandlogo" />
              <h1 className="imgvs">VS</h1>
              <img src={Aus} className="card-img-top" alt="australialogo" />
            </div>
            <div className="card-body">
              <h1 className="card-title">Last Match</h1>
              <div className="card-text">
                <h3 className="vs">ENGLAND VS AUSTRALIA</h3>
                <h6>AN ALTZHIMER'S SOCIETY INTERNATIONAL FRIENDLIES 1</h6>
                <br />
                <h5>GTECH COMMUNITY STADIUM</h5>
                <h3>TUE 11, APRIL 2023</h3>
                <h4 className='score'>SCORE</h4>
                <h2>0 - 2</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="image-containter">
              <img src={England} className="card-img-top" alt="englandlogo" />
              <h1 className="imgvs">VS</h1>
              <img src={Haiti} className="card-img-top" alt="hatitlogo" />
            </div>
            <div className="card-body">
              <h1 className="card-title">Next Match</h1>
              <div className="card-text">
                <h3 className="vs">ENGLAND VS HAITI</h3>
                <h6>FIFA WOMEN'S WORLD CUP AUSTRALIA AND NEW ZEALAND 2023 GROUP STAGE</h6>
                <br />
                <h5>SUNCORP STADIUM</h5>
                <h3>SAT 22, JULY 2023</h3>
                <h3>10:30 BST</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="image-containter">
              <img src={England} className="card-img-top" alt="englandlogo" />
              <h1 className="imgvs">VS</h1>
              <img src={Denmark} className="card-img-top" alt="denmarklogo" />
            </div>
            <div className="card-body">
              <h1 className="card-title">Following Match</h1>
              <div className="card-text">
                <h3 className="vs">ENGLAND VS DENMARK</h3>
                <h6>FIFA WOMEN'S WORLD CUP AUSTRALIA AND NEW ZEALAND 2023 GROUP STAGE</h6>
                <br />
                <h5>ALLIANZ STADIUM</h5>
                <h3>FRI 28, JULY 2023</h3>
                <h3>09:30 BST</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  catch (error) {
    console.error("An error has occurred:", error);
    return<div>An error has occurred while trying to load the fixtures page. Please try again.</div>;
  }
}

export default Fixtures;
