import React from 'react';
import PlayerCard from './components_players/PlayerCard';
import PlayerButton from './components_players/PlayerButton';
import PlayerValues from './components_players/PlayerValues';
import LionessIntro from './components_players/LionessIntro';
import PlayerSlide from './components_players/PlayerSlide';


import './PlayerProfiles.css'

//players photos
import leah from './images_players/LeahWIlliamson_Lioness.png';
import chloe from './images_players/ChloeKelly_Lioness.png';
import lauren from './images_players/laurenjames.png';
import mary from './images_players/MayEarps.png';


const PlayerProfiles= () => {
  return (
    <div className="player-profiles">
      <LionessIntro />
      <p className="profiles-title">Player Profiles</p>
      <div className="players-cards">
        <PlayerCard
          name="Leah Williamson"
          image={leah}
          position="Captain"
          info="Leah is the captain of the team and a charismatic leader"
          goals="23"
          matches="12"
          quote="The most important thing is that girls get equal access because you are then giving them the opportunity to choose to play football"
          link="https://footystats.org/players/england/leah-williamson"
        />
        <PlayerCard
          name="Lauren James"
          image={lauren}
          position="Forward"
          info="Lauren James has been named Young Player of the Year at the 2023 Women's Football Awards"
          goals="5"
          matches="18"
          quote="This voyage was never meant to be easy"
          link="https://footystats.org/players/england/lauren-james"
        />
        <PlayerCard
          name="Chloe Kelly"
          image={chloe}
          position="Forward"
          info="Chloe is best known for taking her shirt off after scoring the winning goal against Germany"
          goals="4"
          matches="12"
          quote="I can't believe we've won it, I just can't, it's mad"
          link=""
        />
        <PlayerCard
          name="Mary Earps"
          image={mary}
          position="Goalkeeper"
          info="Received her 'The Best Women's Goalkeeper Award™ 'following her UEFA Women's EUROS win last summer"
          goals="0"
          matches="8"
          quote="There is only one of you in the world, and that's more than good enough. Be unapologetically yourself."
          link="https://footystats.org/players/england/mary-earps"
      
        />
      </div>
      <PlayerSlide />
    </div>
  );

}

export default PlayerProfiles;