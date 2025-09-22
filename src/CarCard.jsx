import React, { useState } from 'react';
import { icons } from './carData';

const CarCard = ({ car }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="car-card">
        <div className="card-header">
          <span className="car-name">{car.name}</span>
          <button 
            className={`favorite-btn ${isFavorited ? 'favorited' : ''}`}
            onClick={handleFavoriteClick}
            aria-label="Add to favorites"
          >
            <i className={`fas fa-heart ${isFavorited ? 'text-danger' : 'text-muted'}`}></i>
          </button>
        </div>
        
        <div className="car-image-container">
          <img 
            src={car.image} 
            alt={car.name}
            className="car-image"
          />
        </div>

        <div className="car-info">
          <div className="car-specs">
            <div className="spec-item">
              <img src={icons.gasStation} alt="Fuel" className="spec-icon" />
              <span>{car.fuel}</span>
            </div>
            <div className="spec-item">
              <span className="spec-text">Automatic</span>
            </div>
            <div className="spec-item">
              <img src={icons.profile} alt="Passengers" className="spec-icon" />
              <span>{car.passengers} People</span>
            </div>
          </div>
          
          <div className="car-price">
            <span className="price-amount">{car.price}</span>
            <span className="price-unit">{car.currency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;