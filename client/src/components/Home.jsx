// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import './Home.css'; // Don't forget this!

const images = [
    '/assets/Dog.jpeg',
    '/assets/Rabbit.jpg',
    '/assets/Dog2.jpg',
    '/assets/Cat.jpg'
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt="Pet" className="slider-image" />
      <div className="slider-content">
        <h1>🐾 Welcome to Pet Records</h1>
        <p>Manage your beloved pets with ease and style.</p>
      </div>
    </div>
  );
};

export default Home;
