// src/components/SearchResults.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const [filteredPets, setFilteredPets] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await fetch('http://localhost:2006/pets');
        const data = await res.json();

        const filtered = data.filter(
          (pet) =>
            pet.name.toLowerCase().includes(query.toLowerCase()) ||
            pet.species.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredPets(filtered);
      } catch (err) {
        console.error('Error fetching pets:', err);
      }
    };

    if (query) fetchPets();
  }, [query]);

  return (
    <div className="container mt-4">
      <h2>Search Results for: "{query}"</h2>
      {filteredPets.length > 0 ? (
        <div className="row">
          {filteredPets.map((pet) => (
            <div className="col-md-4" key={pet._id}>
              <div className="card mb-4 shadow">
                <div className="card-body">
                  <h5 className="card-title">{pet.name}</h5>
                  <p className="card-text">
                    <strong>Species:</strong> {pet.species}<br />
                    <strong>Age:</strong> {pet.age || 'N/A'}<br />
                    <strong>Owner:</strong> {pet.ownerName || 'N/A'}<br />
                    <strong>Vaccinated:</strong> {pet.vaccinated ? 'Yes' : 'No'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No pets found.</p>
      )}
    </div>
  );
};

export default SearchResults;
