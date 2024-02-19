import React from 'react';
import '../styles_players/LionessIntro.css';
import lionleah from '../images_players/leah_test_lioness.png';
import PlayerButton from './PlayerButton';

const info = {
    title: 'Bringing football home',
    
};

export default function LionessIntro() {
    
    return (
        <>
        <section className = 'LionessIntro__container'>
            <div className = 'PlayerBox'>
                <div className = 'LionessIntro_text'>
                    <h4 className = 'LionessTitle'>{info.title}</h4>
                    <p>Discover the <span id = 'player-green-text'>force</span> behind the <span id="player-purple-text">Lionessess</span>
                    .</p><p> Be <span id='player-yellow-text'>inspired </span> by a team of <span id ='player-green-text'>leaders</span>.
                    </p>
                    {/* <PlayerButton /> */}
                </div>
            </div>
            <div className = 'LionessIntro_Image'>
                <div className='LionessImage'>
                    <img
                        className = 'LionessImage'
                        src = {lionleah}
                        alt = {'the Lionessess Team'}
                        style = {{ 
                            width: info.imageSize,
                            height: 500, }} 
                     />
                </div>
            </div>
        </section>
        </>
    );
}
        