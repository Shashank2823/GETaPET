// src/components/Pets.js
import React, { useState, useEffect } from 'react';

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
    <div className="container">
      <h1>Pets Available for Adoption</h1>
      {pets.map(pet => (
        <div key={pet.pet_id} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={pet.image} alt={pet.name} className="img-fluid" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <p className="card-text">Age: {pet.age} years</p>
                <p className="card-text">Gender: {pet.gender}</p>
                <p className="card-text">Species: {pet.species}</p>
                <p className="card-text">Breed: {pet.breed}</p>
                <p className="card-text">Behavior: {pet.behavior}</p>
                <p className="card-text">Availability: {pet.availability}</p>
                <p className="card-text">Status: {pet.status}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pets;
