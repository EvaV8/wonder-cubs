import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FixturesNav from './FixturesNav';
import Fixtures from './Fixtures';
import FixturesToggle from './FixturesToggle';
import Standings from './Standings';
import '../Styles/FixturesHome.css';

//Component to bring all fixture components together
//Steph Williams 26.05

//This function allows us to toggle between tabs(containers) fixtures and standings by clicking on the buttons
//If the Fixtures button is pressed the Fixtures container is diplayed
//If the Standings button is pressed the Standings container is displayed
const FixturesHome = () => {
  const [activeTab, setActiveTab] = useState("fixtures"); 

  const renderContent = () => {
    try {
      if (activeTab === "fixtures") { 
        return (
          <>
            <FixturesToggle setActiveTab={setActiveTab} data-testid="fixturesToggle"/>
            <Fixtures data-testid="fixtures"/> 
          </>
        );
      } else if (activeTab === "standings") {
        return (
          <>
            <FixturesToggle setActiveTab={setActiveTab} data-testid="fixturesToggle"/>
            <div className="standings-container">
              <Standings data-testid="standings" setActiveTab={setActiveTab} />
            </div>
          </>
        );
      }
  }
  catch(error) {
    console.error("An error has occurred:", error);
    return <div>An error has occurred. Please try again later.</div>;
    }
  };

  return (
    <div className="FixturesHome" id="fixturesHome" data-testid="fixturesHome">
      <FixturesNav />
      {renderContent()}
    </div>
  );
};

export default FixturesHome;
