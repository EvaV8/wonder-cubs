// INSTRUCTIONS: to make this server file work you need to always:
// type inside your terminal the following:

// node proxyServer.js

// and then run the usual in another terminal:
// npm start

import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles/FindYourClub.css';
//components
import MotivSection from './components/MotivatSection';
import RegionSection from './components/RegionSection';
import SectionTitle from './components/SectionTitle';
//images
import girlsplay_img from './images/girlsplay.jpg';


const FindYourClub = () => {
  const [clubs, setClubs] = useState('');
  // const [chosenRegion, setChosenRegion] = useState('london');
  const [chosenCity, setChosenCity] = useState('');

  //calling Maps Places API from our server
  const getClub = () => {
    const options ={
      method: 'GET',
      url: 'http://localhost:8000/clubs',
      params: {
        query: `football female teenagers clubs near ${chosenCity}`,
        region: 'uk'
      }
    }

    axios.request(options)
    .then(response => {
      // console.log(response);
      setClubs(response.data)
      // console.log(clubs.results);
      console.log("NOTE: remember to run in your terminal: node proxyServer.js")
      console.log("and then run again in a new one: npm start")
    }).catch(error => {
      console.log(error)
    })
  }

  // useEffect(()=>{
  //   clubs.results && console.log(clubs.results[0].name);
  // }, [clubs]);

  return (
    <div className="findClub">
      <MotivSection />
      <SectionTitle title="Find the nearest clubs in your area"/>
      <div className="clubs-container">
        <div className="search-container">
          <input 
            type="search" id='clubs-search' name='clubs-search'
            placeholder='Enter postcode or city...'
            value={ chosenCity }
            onChange={ e=> setChosenCity(e.target.value)}
          />
          <button onClick={getClub}><i className="fa fa-search"></i></button>
        </div>
        <div className="clubs-results">
          {chosenCity && <p className="clubs-title">Clubs in {chosenCity}</p>}
          {clubs.results && clubs.results.slice(0,10).map((club, index) => 
            <div className="club-info" key={club.place_id}>
              <p className='club-name'>{ index + 1 }. { club.name }</p>
              <p>adress: {club.formatted_address}</p>
              <hr className='line'></hr>
            </div>
          )}
        </div>
      </div>
      <SectionTitle title="Check our map below for all junior clubs in the UK"/>
      <RegionSection/>
      <div className="ImagesSection">
        <img src={ girlsplay_img } alt="Girls playing football"/>
      </div>
    </div>

  );
};
  
export default FindYourClub;