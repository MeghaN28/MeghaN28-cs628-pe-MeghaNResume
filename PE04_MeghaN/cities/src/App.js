import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate ,Link } from "react-router-dom";
import CitiesList from "./ListCity";
import AddCity from "./AddCity";
import "./App.css";

export default function App() {
  const [cities, setCities] = useState([
    { id: 1, name: "New York", country: "USA", population: "8.4M", details: "Known as the Big Apple." },
    { id: 2, name: "Tokyo", country: "Japan", population: "14M", details: "Famous for its modernity and tradition." },
    { id: 3, name: "Paris", country: "France", population: "2.1M", details: "Known as the City of Light." },
  ]);

  const addCity = (city) => {
    setCities((prevCities) => [...prevCities, { ...city, id: prevCities.length + 1 }]);
  };

  return (
    <Router>
      <div className="app-container">
        <h1 className="app-title">Cities Information App</h1>
        <nav className="app-nav">
          <Link to="/cities" className="nav-link">Cities List</Link>
          <Link to="/add-city" className="nav-link">Add City</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/cities" replace />} />
          <Route path="/cities/*" element={<CitiesList cities={cities} />} />
          <Route path="/add-city" element={<AddCity addCity={addCity} />} />
        </Routes>
      </div>
    </Router>
  );
}