import React from 'react';

//Celina Benedic 

//This component is responsible for returning a div detailing the team's values
//Currently is incomplete and in desperate need of styling sa will not be incorporated into the page
// The design should be a flex box with three columns,each having a h3 and a p tag resting against a white background

const playerValues = [

    {
        id: 0,
        belief: 'Team Above All Else',
        text: "We work together. We push together. We lose together and we win together"
    
    }, 
    {
        id: 1,
        belief: 'Relentless Pursuit',
        text: "We don't stop until we're proud and used up by the end of the game."
    
    },
    {
        id: 2,
        belief: 'Relentless Recovery',
        text: "We don't get injured and do not injure eachother."
    
    },
]

export default function PlayerValues () {
    const listValues = playerValues.map (elem =>
        <div key={elem.id}>
            <div></div>
        <h2 >
            <b>{elem.belief}</b>   
        </h2>
        <p id >
            {elem.text}
        </p>
    </div>
    );

    return (
        <div className = "player-values__con">
            <h2>Player Values</h2>
                {listValues}
        </div>
    );
}
