import React from "react";
import '../Styles/FixturesNav.css';

//This component is display at all times when in fixtures
//Steph Williams 26.05
//Allows a fixed title below an exisiting nav bar

const FixturesNav = () => {
    return (
        <div className="fixturesNav">
            <h1 className="fixturesH">Lioness Fixtures</h1>
            <p className="fixturesP">Keep up-to-date with England's Senior Womens football team!</p>
        </div>
    );
}

export default FixturesNav