import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import CityDetails from "./CityDetails";
import "./ListCity.css";

export default function ListCity({ cities }) {
  const navigate = useNavigate();

  const handleCityClick = (cityId) => {
    navigate(`/cities/${cityId}`, { replace: true });
  };

  return (
    <div className="cities-container">
      <div className="cities-list">
        <h2>Cities List</h2>
        <ul>
          {cities.map((city) => (
            <li key={city.id}>
              <button className="city-link" onClick={() => handleCityClick(city.id)}>
                {city.name}
              </button>
            </li>
          ))}
        </ul>
        <Link to="/add-city" className="add-city-button">
          Add City
        </Link>
      </div>
      <div className="city-details">
        <Routes>
          <Route path=":id" element={<CityDetails cities={cities} />} />
        </Routes>
      </div>
    </div>
  );
}