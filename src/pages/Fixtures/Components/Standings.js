import React from "react";
import '../Styles/Standings.css';

//This component loads the Standings when set to active
//Loads an iframe which calls an api from footstats.org

const Standings = ({ setActiveTab }) => {

  return (
    <div className="standings">
      <h1>Standings</h1>
      <iframe
        src="https://footystats.org/api/club?id=11620"
        height="100%"
        width="100%"
        style={{ height: "420px", width: "50%"}}
        frameBorder="0"
        title="Standings"
      ></iframe>
    </div>
  );
};

export default Standings;