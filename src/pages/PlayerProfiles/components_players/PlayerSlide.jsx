import { useState} from 'react';

import {playersList} from './data.js';
import '../styles_players/PlayerSlide.css';

//Celina Benedic 05.2023
//Function that renders an ungly slide

export default function PlayerSlide() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < playersList.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex (index + 1);
    } else {
        setIndex (0);
    }
    }

    function handleMoreClick() {
    setShowMore(!showMore);

    }

    let slider = playersList[index];

    return (
            <div className = "slider"> 
                <div className = "slider__box">
                    <div className = 'slider__image'>
                        <img src = {slider.url} 
                        alt = {slider.name} width={600} height={400}/>
                        </div>
                    <div className = 'slider__name'>
                        <h2>
                        <i>{slider.name}</i>
                        </h2>
                    <div className= 'slider__btn'>    
                        <button className = 'btn-slider-next'
                            onClick={handleNextClick}>
                            Next</button>
       
                            <h6>
                            ({index + 1} of {playersList.length})
                            </h6>
                    <button className = 'btn-slider-details'
                            onClick={handleMoreClick}>
                            {showMore? 'Hide' : 'Show'} details 
                    </button>
                        {showMore&&<p className = 'btn-details'>{slider.description}</p>}
                    </div>
                </div>


            </div>
    </div>
    )                   
}