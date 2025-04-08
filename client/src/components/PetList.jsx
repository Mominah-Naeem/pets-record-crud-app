import React from 'react';
import { useNavigate } from 'react-router-dom';

const PetList = ({ pets, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="mb-4 text-center">🐾 All Registered Pets</h2>
      <div className="row">
        {pets.map((pet) => (
          <div className="col-md-4" key={pet._id}>
            <div className="card mb-4 shadow-sm border-primary">
              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <p className="card-text">
                  <strong>Species:</strong> {pet.species}<br />
                  <strong>Age:</strong> {pet.age || 'N/A'}<br />
                  <strong>Owner:</strong> {pet.ownerName || 'Unknown'}<br />
                  <strong>Vaccinated:</strong> {pet.vaccinated ? ' Yes' : ' No'}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => navigate(`/edit/${pet._id}`)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onDelete(pet._id)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
