// import React, { Component } from 'react';


// const ProfileDee = () => {
//     return ( <div>
//         works
//     </div> );
// }
 
// export default ProfileDee;


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProfileDee.css';
import ballet from './ballet.jpg';

function BasicExample() {
  return (
        <Card className="profile-dee" style={{ width: '18rem' }}>
            <Card.Img src={ballet} alt="ballerina" />
            <Card.Body className="card-body">
                <Card.Title className="title-dee">Hello! I'm Dee</Card.Title>
                <Card.Text>
                    I like to do ballet and practice twice a week. It keeps me fit and I learn new skills.
                </Card.Text>
                <Button className="profile-btn">Go back</Button>
            </Card.Body>
        </Card>
  );
}

export default BasicExample;