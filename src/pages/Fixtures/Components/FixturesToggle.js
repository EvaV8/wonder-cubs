import React from "react";
import '../Styles/FixturesToggle.css';
import Standings from './Standings';

//This function sets the behaviour of the buttons and what do do when they are clicked
//Steph Williams 25.05

const FixturesToggle = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  try{
    return (
      <div className="fixturesToggle" data-testid="fixturesToggle">
        <div className="tabs">
          <div className="tab-fixtures">
            <button
              type="button"
              className={`btn btn-secondary btn-lg ${activeTab === "fixtures" ? "active" : ""}`}
              onClick={() => handleTabClick("fixtures")}
            >
              Fixtures
            </button>
          </div>
          <div className="tab-standings">
            <button
              type="button"
              className={`btn btn-secondary btn-lg ${activeTab === "standings" ? "active" : ""}`}
              onClick={() => handleTabClick("standings")}
            >
              Standings
            </button>
          </div>
        </div>
        {activeTab === "standings" && <Standings setActiveTab={setActiveTab} />}
      </div>
    );
}
  catch (error) {
    console.error("An error has occurred:", error);
    return <div>An error has occurred while rendering the fixtures toggle.</div>
  }
};

export default FixturesToggle;

