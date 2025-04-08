// src/components/PetForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PetForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    age: '',
    ownerName: '',
    vaccinated: false,
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  useEffect(() => {
    if (isEditing) {
      fetch(`http://localhost:2006/pets/${id}`)
        .then(res => res.json())
        .then(data => setFormData(data))
        .catch(err => console.error('Failed to load pet:', err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = isEditing ? 'PUT' : 'POST';
    const url = isEditing
      ? `http://localhost:2006/pets/${id}`
      : 'http://localhost:2006/pets';

    try {
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      onFormSubmit(); // Refresh pet list
      navigate('/pets');
    } catch (error) {
      console.error('Error saving pet:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{isEditing ? 'Edit Pet' : 'Add New Pet'}</h3>
      <div className="mb-3">
        <label className="form-label">Pet Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Species</label>
        <input
          type="text"
          className="form-control"
          name="species"
          value={formData.species}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Age</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Owner Name</label>
        <input
          type="text"
          className="form-control"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
        />
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          name="vaccinated"
          checked={formData.vaccinated}
          onChange={handleChange}
        />
        <label className="form-check-label">Vaccinated</label>
      </div>

      <button type="submit" className="btn btn-success">
        {isEditing ? 'Update Pet' : 'Add Pet'}
      </button>
    </form>
  );
};

export default PetForm;
