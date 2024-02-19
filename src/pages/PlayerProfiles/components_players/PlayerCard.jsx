import React from 'react';
import '../styles_players/PlayerCard.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


//Creating PlayerCard component holding info about the players
function PlayerCard({image, position, name, info, goals, matches, quote,link,social}) {
  return (
    <Card className='playerCard' style={{ width: '15rem' }}>
      <Card.Img src={image} />
      <Card.Body>
        <Card.Title className='playerTitle'>{name}</Card.Title>
        <Card.Text>
          {info}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Position: {position}</ListGroup.Item>
        <ListGroup.Item className='Goals'>Goals: {goals}</ListGroup.Item>
        <ListGroup.Item>Matches: {matches}</ListGroup.Item>
        <ListGroup.Item><span style = {{color:'#A769C9'}}>In her words: </span>{quote}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={link}>Footy Stats</Card.Link>
        <Card.Link href={social}>TikTok</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;