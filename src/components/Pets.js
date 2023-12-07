// src/components/Pets.js
import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPets(data);
      })
      .catch(error => {
        console.error('Error fetching pets:', error);
      });
  }, []); 

  return (
    <div className="pets-container mx-auto"> 
      <h1 className="text-center">Pets Available for Adoption</h1>
      <Row xs={1} md={4} className="g-4">
        {pets.map(pet => (
          <Col key={pet.pet_id}>
            <Card style={{ width: '18rem',margin: '0 auto' }} className="mb-3">
              <Card.Img variant="top" src={pet.image} alt={pet.name} className="img" />
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Text>Age: {pet.age} years</Card.Text>
                <Card.Text>Gender: {pet.gender}</Card.Text>
                <Card.Text>Species: {pet.species}</Card.Text>
                <Card.Text>Breed: {pet.breed}</Card.Text>
                <Card.Text>Behavior: {pet.behavior}</Card.Text>
                <Card.Text>Availability: {pet.availability}</Card.Text>
                <Card.Text>Status: {pet.status}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Pets;
