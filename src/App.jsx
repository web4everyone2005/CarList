import React from 'react'
import { carData } from './carData'
import CarCard from './CarCard'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="container-fluid px-4 py-5">
        <div className="header-section text-center mb-5">
          <h1 className="main-title">Xe dành cho bạn</h1>
        </div>
        
        <div className="cars-grid">
          <div className="row g-4">
            {carData.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
