import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import PetForm from './components/PetForm';
import PetList from './components/PetList';
import SearchResults from './components/SearchResults';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  const fetchPets = async () => {
    try {
      const response = await fetch('http://localhost:2006/pets');
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:2006/pets/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete pet');
      fetchPets();
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  const handleFormSubmit = () => {
    fetchPets();
  };

  return (
    <div className="d-flex flex-column min-vh-100" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={
            <div className="container mt-5">
              <PetForm onFormSubmit={handleFormSubmit} />
            </div>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <div className="container mt-5">
              <PetForm onFormSubmit={handleFormSubmit} />
            </div>
          }
        />
        <Route
          path="/pets"
          element={
            <div className="container mt-5">
              <PetList pets={pets} onDelete={handleDelete} />
            </div>
          }
        />
        <Route
          path="/search"
          element={
            <div className="container mt-5">
              <SearchResults />
            </div>
          }
        />
      </Routes>
      <Footer /> {/* This will always be shown */}
    </div>
  );
};

export default App;
